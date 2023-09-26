import {
	CartAddProductDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	ProductGetSingleOneDocument,
	type CartFragmentFragment,
} from "@/gql/graphql";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { changeItemQuantity } from "../actions/changeItemQuantity";
import { executeGraphql } from "../actions/utils";

export const addToCardAction = async (form: FormData) => {
	"use server";

	console.log(form);
	const cart = await getOrCreateCart();
	const item = cart.orderItems?.find((item) => item.product?.id === form.get("productId"));
	if (item) {
		console.log("hasItem");
		await changeItemQuantity(item.id, item.quantity + 1);
	} else {
		await addToCart(cart.id, form.get("productId") as string);
	}
	revalidateTag("cart");
};

export const getCardFromCookies = async () => {
	"use server";

	const cartId = cookies().get("cartId")?.value;
	if (!cartId) return null;

	const cart = await getCartById(cartId);
	if (!cart.order) return null;

	return cart.order;
};

async function getOrCreateCart(): Promise<CartFragmentFragment> {
	const existingCart = await getCardFromCookies();
	if (existingCart) return existingCart;

	const cart = await createCart();
	if (!cart.createOrder) throw new Error("Cart not created");

	cookies().set("cartId", cart.createOrder.id, {
		httpOnly: true,
		sameSite: "lax",
	});
	return cart.createOrder;
}

function getCartById(cartId: string) {
	return executeGraphql({
		query: CartGetByIdDocument,
		variables: { id: cartId },
		next: { tags: ["cart"] },
	});
}

function createCart() {
	return executeGraphql({ query: CartCreateDocument });
}

async function addToCart(orderId: string, productId: string) {
	const product = await executeGraphql({
		query: ProductGetSingleOneDocument,
		variables: { id: productId },
	});
	if (!product.product) throw new Error("Product not found");

	return executeGraphql({
		query: CartAddProductDocument,
		variables: {
			orderId,
			productId,
			total: product.product.price,
		},
	});
}

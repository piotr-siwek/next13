import { CartGetByIdDocument } from "@/gql/graphql";

import { IncrementProductQuantity } from "@/ui/atoms/IncrementProductQuantity";
import { RemoveFromCartButton } from "@/ui/atoms/RemoveFromCartButton";
import { formatMoney } from "@/utils/formatMoney";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { executeGraphql } from "../actions/utils";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const { order: cart } = await executeGraphql({
		query: CartGetByIdDocument,
		variables: {
			id: cartId,
		},
		next: {
			tags: ["cart"],
		},
		cache: "no-cache",
	});

	if (!cart) {
		redirect("/");
	}

	return (
		<div>
			<h1>Order #{cart.id} summary</h1>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr key={item.product.id}>
								<td>{item.product.name}</td>
								<td>
									<IncrementProductQuantity quantity={item.quantity} itemId={item.id} />
								</td>
								<td>{formatMoney(item.product.price)}</td>
								<RemoveFromCartButton productId={item.id} />
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

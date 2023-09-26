import { getCardFromCookies } from "@/app/api/cart";
import Link from "next/link";

export const CartIcon = async () => {
	const cart = await getCardFromCookies();
	const quantity = cart?.orderItems.reduce((acc, item) => acc + item.quantity, 0);
	console.log({ cart });
	return (
		<Link href="/cart" className="flex h-10 w-10">
			<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 17h6M9 11h6M4 4h16l-1.58 7.9A2 2 0 0116.42
                13H7.58a2 2 0 01-1.89-1.1L4 4z"
				/>
			</svg>
			{quantity}
		</Link>
	);
};

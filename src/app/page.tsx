import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className="mx-auto max-w-md p-12 sm:max-w-2xl">
				<Link href="/products">Products</Link>
			</section>
		</main>
	);
}

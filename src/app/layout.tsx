import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Search } from "@/ui/atoms/Search";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav>
					<ul className="flex justify-center space-x-4">
						<li>
							<ActiveLink
								exact
								href="/"
								activeClassName="text-blue-500 border-b-2 border-b-blue-500"
							>
								Home
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								exact
								href="/products"
								activeClassName="text-blue-500 border-b-blue-100 border-b-2 border-b-blue-500"
							>
								All
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								href="/categories"
								activeClassName="text-blue-500 border-b-blue-100 border-b-2 border-b-blue-500"
							>
								Categories
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								href="/collections"
								activeClassName="text-blue-500 border-b-blue-100 border-b-2 border-b-blue-500"
							>
								Collections
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								exact
								href="/collections/summer-vibes"
								activeClassName="text-blue-500 border-b-blue-100 border-b-2 border-b-blue-500"
							>
								Summer Vibes
							</ActiveLink>
						</li>
						<li>
							<ActiveLink
								exact
								href="/categories/accessories/1"
								activeClassName="text-blue-500 border-b-blue-100 border-b-2 border-b-blue-500"
							>
								Accessories
							</ActiveLink>
						</li>
					</ul>
				</nav>
				<Search />
				<div className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</div>
				<footer>
					<p className="text-center text-sm text-gray-500">© {new Date().getFullYear()} </p>
				</footer>
			</body>
		</html>
	);
}

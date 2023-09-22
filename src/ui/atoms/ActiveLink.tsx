"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps<Href> = {
	activeClassName: string;
	className?: string;
	exact?: boolean;
	children: React.ReactNode;
} & LinkProps<Href>;

export const ActiveLink = <THref extends string>({
	className,
	activeClassName,
	href,
	exact = false,
	...linkProps
}: ActiveLinkProps<THref>) => {
	const pathname = usePathname();
	const isActive =
		pathname === href || (!exact && typeof href === "string" && pathname.startsWith(href));

	return (
		<Link
			{...linkProps}
			role="link"
			href={href}
			aria-current={isActive ? true : undefined}
			className={`${className} ${isActive ? activeClassName : ""}`}
		/>
	);
};

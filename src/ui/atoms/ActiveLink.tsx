"use client";

import { type Route } from "next";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps extends LinkProps<Route<string>> {
	className?: string;
	activeClassName?: string;
}

export const ActiveLink = ({ className, activeClassName, ...linkProps }: ActiveLinkProps) => {
	const pathname = usePathname();

	console.log({
		linkProps,
		pathname,
	});
	return (
		<Link
			{...linkProps}
			role="link"
			className={`${className} ${linkProps.href === pathname ? activeClassName : ""}`}
		/>
	);
};

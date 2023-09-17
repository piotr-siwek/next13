import { ActiveLink } from "../atoms/ActiveLink";

interface Props {
	page: number;
}

export const PaginationItem = ({ page }: Props) => {
	return (
		<li>
			<ActiveLink href={`/products/${page}`} activeClassName="text-blue-500">
				{page}
			</ActiveLink>
		</li>
	);
};

interface ProductListItemDescriptionProps {
	name: string;
	category: string;
	price: number;
}

export const ProductListItemDescription = ({ name, category }: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
			</div>
			<p className="text-sm text-gray-500">
				<span className="sr-only">Kategoria:</span>

				{category}
			</p>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>
				{category}
			</p>
		</div>
	);
};

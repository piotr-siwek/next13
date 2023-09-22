import { getCollection } from "@/app/actions/getCollection";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
	params: { collectionName },
}: {
	params: { collectionName: string };
}) => {
	const collection = await getCollection(collectionName);
	return {
		title: collection?.name,
		description: collection?.description,
	};
};

const SingleCollectionPage = async ({
	params: { collectionName },
}: {
	params: { collectionName: string };
}) => {
	const collection = await getCollection(collectionName);

	if (!collection) notFound();

	return (
		<div>
			<h1>{collection.name}</h1>
			{collection.products.map((product) => {
				return (
					<div key={product.id}>
						<p>{product.name}</p>
					</div>
				);
			})}
		</div>
	);
};
export default SingleCollectionPage;

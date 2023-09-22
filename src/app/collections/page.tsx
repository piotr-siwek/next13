import Link from "next/link";
import { getCollectionsList } from "../actions/getCollectionsList";

const CollectionsPage = async () => {
	const collections = await getCollectionsList();
	return (
		<div>
			<h1>Collections</h1>
			{collections.map((collection) => {
				return (
					<Link key={collection.id} href={`/collections/${collection.slug}`}>
						<h2>{collection.name}</h2>
					</Link>
				);
			})}
		</div>
	);
};

export default CollectionsPage;

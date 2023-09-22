import { redirect } from "next/navigation";

const CategoryPage = ({ params: { categoryName } }: { params: { categoryName: string } }) => {
	redirect(`/categories/${categoryName}/1`);
};
export default CategoryPage;

import { type ReactNode } from "react";
import { Pagination } from "@/ui/organisms/Pagination";

const ProjectsLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			{children}
			<Pagination />
		</div>
	);
};

export default ProjectsLayout;

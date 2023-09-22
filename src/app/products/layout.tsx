import { Pagination } from "@/ui/organisms/Pagination";
import { type ReactNode } from "react";

const ProjectsLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			{children}
			<Pagination />
		</div>
	);
};

export default ProjectsLayout;

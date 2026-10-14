import {Chip} from "@mui/material";
import {projects} from "../data/projects";
import {Project} from "../interfaces";
import PageSection from "./PageSection";

const groups: { category: Project["category"], title: string }[] = [
    {category: "android", title: "Android apps"},
    {category: "web", title: "Web apps"},
    {category: "repo", title: "Interesting repositories"},
]

function ProjectCard(project: Project) {
    const title = <b>{project.title}</b>
    return (
        <li key={project.title} className={"rounded-md shadow-md p-4 w-72 " + (project.placeholder ? "border border-dashed border-gray-400" : "")}>
            {project.url ? <a className="link" href={project.url}>{title}</a> : title}
            {project.placeholder && <Chip className="ml-2" size="small" label="Placeholder" color="warning" variant="outlined"/>}
            <p>{project.description}</p>
        </li>
    )
}

export default function Projects() {
    return (
        <PageSection sectionName="Projects" sectionId="projects">
            {groups.map(g => (
                <div key={g.category}>
                    <h2>{g.title}</h2>
                    <ul className="flex flex-wrap gap-4 mb-6">
                        {projects.filter(p => p.category === g.category).map(ProjectCard)}
                    </ul>
                </div>
            ))}
        </PageSection>
    )
}

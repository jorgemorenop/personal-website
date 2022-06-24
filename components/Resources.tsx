import 'react-vertical-timeline-component/style.min.css';
import {recommendedResources} from "../data/resources";
import {Chip, Stack} from "@mui/material";
import {RecommendedResource} from "../interfaces";



function ResourceItem(resource: RecommendedResource) {
    let title = <><b>{resource.title}</b>, <i>{resource.authors}</i></>;
    if (resource.url != null) {
        title = <a href={resource.url}>{title}</a>
    }

    return (
        <li>
            {title} - {resource.description}
            <div>
                {resource.categories.map(x => <Chip label={x} key={x} variant="outlined" />)}
            </div>
        </li>
    )
}

export default function Resources() {
    return (
        <section id="resources">
            <h1>Recommended courses and books</h1>
            <h2>Courses</h2>
            {recommendedResources.filter(x => x.type == "course").map(ResourceItem)}
            <h2>Books</h2>
            {recommendedResources.filter(x => x.type == "book").map(ResourceItem)}
        </section>

    )
}
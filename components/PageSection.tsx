import {Divider} from "@mui/material";
import {Element} from "react-scroll"

export default function PageSection({sectionName, sectionId, children}) {
    return (
        <section id={sectionId}>
            <Element key={sectionId}>
                <div className="bg-white m-8 w-full shadow-md p-10">
                <h1>{sectionName}</h1>
                    <Divider variant="fullWidth"/>
                    <div className="mt-8">
                        {children}
                    </div>
                </div>
            </Element>

        </section>
    )
}
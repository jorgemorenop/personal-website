import {Divider} from "@mui/material";
import {Element} from "react-scroll"
import Collapsible from "react-collapsible";
import {MdArrowDropDown, MdArrowDropUp} from "react-icons/md";

export default function PageSection({sectionName, sectionId, children, defaultOpen = true}) {
    return (
        <Element name={sectionId}>

            <div className="bg-white my-8 w-full shadow-md p-10">
                <Collapsible
                    open={defaultOpen}
                    transitionTime={200}
                    trigger={
                        <div className="section-trigger flex items-center justify-between cursor-pointer" title="Expand section">
                            <h1>{sectionName}</h1>
                            <MdArrowDropDown size="2rem" aria-hidden="true"/>
                        </div>
                    }
                    triggerWhenOpen={
                        <div className="section-trigger flex items-center justify-between cursor-pointer" title="Collapse section">
                            <h1>{sectionName}</h1>
                            <MdArrowDropUp size="2rem" aria-hidden="true"/>
                        </div>
                    }
                >
                    <Divider variant="fullWidth"/>
                    <div className="mt-8 mb-5">
                        {children}
                    </div>
                </Collapsible>
            </div>
        </Element>
    )
}

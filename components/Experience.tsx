import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdWork, MdSchool, MdStar} from 'react-icons/md';
import {experienceItems} from "../data/experience";
import {ExperienceItem} from "../interfaces";
import PageSection from "./PageSection";
import Image from "next/image";




function ExperienceItemBlock(item: ExperienceItem) {
    let bgColorIcon;
    let bgColor;
    let icon;

    if (item.type == "work") {
        bgColor = '#acd7e7'
        bgColorIcon = 'rgb(33, 150, 243)'
        icon = <MdWork/>
    } else if (item.type == "education") {
        bgColor = '#edc2d1'
        bgColorIcon = 'rgb(233, 30, 99)'
        icon = <MdSchool/>
    } else {
        throw new Error(`Item type not supported: ${item.type}`)
    }

    return (
        <VerticalTimelineElement
            key={item.title+item.subtitle}
            className={`vertical-timeline-element--${item.type}`}
            date={item.years}
            contentStyle={{background: bgColor, color: 'black'}}
            contentArrowStyle={{borderRight: `7px solid  ${bgColor}`}}
            iconStyle={{background: bgColorIcon, color: '#fff'}}
            icon={icon}
        >
            <div className="flex space-x-2 items-center ">
                { item?.icon ? <Image
                    src={item.icon}
                    alt={item.title}
                    className="experience-logo"
                    height='100%'
                    width={60}
                /> : <></>
                }
            <div>
                <h3 className="vertical-timeline-element-title font-bold">{item.title}</h3>
                <h3 className="vertical-timeline-element-subtitle italic">{item.subtitle}</h3>
            </div>
            </div>
            {item.description}
        </VerticalTimelineElement>
    )
}

export default function Experience() {
    return (
        <PageSection sectionName="Experience" sectionId="experience" >
            <VerticalTimeline lineColor="#b5bdc4">

                {experienceItems.map(ExperienceItemBlock)}

                <VerticalTimelineElement
                    iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
                    icon={<MdStar/>}
                />
            </VerticalTimeline>
        </PageSection>

    )
}
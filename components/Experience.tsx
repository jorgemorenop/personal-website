import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdWork, MdSchool, MdStar} from 'react-icons/md';
import {experienceItems, ExperienceItem} from "../lib/data/experience";



function ExperienceItemBlock(item: ExperienceItem) {
    let bgColor;
    let icon;

    if (item.type == "work") {
        bgColor = 'rgb(33, 150, 243)'
        icon = <MdWork/>
    } else if (item.type == "education") {
        bgColor = 'rgb(233, 30, 99)'
        icon = <MdSchool/>
    } else {
        throw new Error(`Item type not supported: ${item.type}`)
    }

    return (
        <VerticalTimelineElement
            key={item.title+item.subtitle}
            className={`vertical-timeline-element--${item.type}`}
            date={item.years}
            iconStyle={{background: bgColor, color: '#fff'}}
            icon={icon}
        >
            <h3 className="vertical-timeline-element-title font-bold">{item.title}</h3>
            <h3 className="vertical-timeline-element-subtitle italic">{item.subtitle}</h3>
            {item.description}
        </VerticalTimelineElement>
    )
}

export default function Experience() {
    return (
        <section id="experience">
            <h1>Experience</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: 'lightblue', color: 'black'}}
                    contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                    date="2022 (January) - present"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<MdWork/>}
                >
                    <h3 className="vertical-timeline-element-title font-bold">Freelance Data/Cloud Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle italic">Remote</h4>
                    <p>
                        Freelance work in projects related with Data and/or Cloud technologies
                    </p>
                </VerticalTimelineElement>

                {experienceItems.map(ExperienceItemBlock)}

                <VerticalTimelineElement
                    iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
                    icon={<MdStar/>}
                />
            </VerticalTimeline>
        </section>

    )
}
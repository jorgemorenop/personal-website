import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdWork, MdSchool, MdStar} from 'react-icons/md';

export default function Experience() {
    return (
        <section id="experience">
            <h1>Experience</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: 'rgb(33, 150, 243)', color: 'white'}}
                    contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                    date="2022 (January) - present"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<MdWork/>}
                >
                    <h3 className="vertical-timeline-element-title">Freelance Data/Cloud Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Remote</h4>
                    <p>
                        Freelance work in projects related with Data and/or Cloud technologies
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 - 2022"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<MdWork/>}
                >
                    <h3 className="vertical-timeline-element-title">Data Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Olympic Channel Services</h4>

                    <p>
                        <ul>
                            <li>
                                - Built from the ground a robust, AWS-based, infrastructure capable of scaling for major
                                events such as the Tokyo2020 Olympics (196M unique users with a peak of ~950M
                                events/day,
                                ~60x usual traffic) and the Beijing2022 Olympics (67M unique users with a peak of ~417M
                                events/day, ~20x usual traffic). Heavy focus in security and high availability.
                            </li>
                            <li>
                                - Principal components of the infrastructure were Redshift (Data Warehouse) and a wide
                                variety of (mainly serverless) AWS services: Lambda, ECS, Kinesis, DynamoDB, Athena,
                                RDS,
                                API Gateway, Route 53, or CloudFront, among others.
                            </li>
                            <li>
                                - During my time here, I focused a lot on developing DevOps workflows using
                                Cloudformation,
                                CDK,
                                Git, Codepipeline, Codebuild, etc. I also developed several resources (a CLI tool,
                                common
                                internal
                                libraries, project templates, a generic ETL tool, ...) that ended up being widely used
                                in
                                the team.
                            </li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017 - 2019"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<MdWork/>}
                >
                    <h3 className="vertical-timeline-element-title">Data Scientist</h3>
                    <h4 className="vertical-timeline-element-subtitle">GMV</h4>
                    <p>
                        Work on a wide range of Artificial Intelligence fields, such as Machine Learning, Deep Learning,
                        Computer Vision, Ontology Engineering, Thread Intelligence or Natural Language Processing.
                        Technologies used include pandas, sklearn, Keras, Tensorflow, OpenCV, nltk, Docker, Kubernetes,
                        or
                        AWS cloud.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<MdWork/>}
                >
                    <h3 className="vertical-timeline-element-title">AI Researcher Internship</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ixion Industry and Aerospace SL</h4>
                    <p>
                        Implementation of state-of-the-art path-planning methods for further use in an autonomous
                        underwater
                        vehicle, using C++.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016 - 2017"
                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                    icon={<MdSchool/>}
                >
                    <h3 className="vertical-timeline-element-title">Master's Degree in Artificial Intelligence</h3>
                    <h4 className="vertical-timeline-element-subtitle">Master's Degree</h4>
                    <p>
                        Master’s degree on Artificial Intelligence, heavily focused in research.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<MdWork/>}
                >
                    <h3 className="vertical-timeline-element-title">Research Internship</h3>
                    <h4 className="vertical-timeline-element-subtitle">Polytechnic University of Madrid – Environment
                        laboratory</h4>
                    <p>
                        Configuration of several mathematical models (WRF, CAMx and WRF-Chem ) for weather and chemical
                        predictions.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2012 - 2016"
                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                    icon={<MdSchool/>}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor's Degree in Mathematics and
                        Informatics</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor's Degree</h4>
                    <p>
                        Bachelor's degree that provides education in both Mathematics and Informatics fields, to combine
                        them. Honorific mentions in both fields.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
                    icon={<MdStar/>}
                />
            </VerticalTimeline>
        </section>

    )
}
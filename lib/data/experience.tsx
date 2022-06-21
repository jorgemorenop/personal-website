import {Component} from "react";

export type ExperienceItem = {
    title: string,
    subtitle: string,
    years: string,
    description: any,
    type: "work" | "education"
}

export const experienceItems: ExperienceItem[] = [
    {
        title: "Data Engineer",
        subtitle: "Olympic Channel Services",
        years: "2019 - 2022",
        type: "work",
        description: <p>
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
    },
    {
        title: "Data Scientist",
        subtitle: "GMV",
        years: "2017 - 2019",
        type: "work",
        description: <p>
            Work on a wide range of Artificial Intelligence fields, such as Machine Learning, Deep Learning,
            Computer Vision, Ontology Engineering, Thread Intelligence or Natural Language Processing.
            Technologies used include pandas, sklearn, Keras, Tensorflow, OpenCV, nltk, Docker, Kubernetes,
            AWS cloud.
        </p>
    },
    {
        title: "AI Researcher Internship",
        subtitle: "Ixion Industry and Aerospace SL",
        years: "2017",
        type: "work",
        description: <p>
            Implementation of state-of-the-art path-planning methods for further use in an autonomous
            underwater vehicle, using C++.
        </p>
    },
    {
        title: "Master's Degree in Artificial Intelligence",
        subtitle: "Master's Degree",
        years: "2016 - 2017",
        type: "education",
        description: <p>
            Master’s degree on Artificial Intelligence, heavily focused in research.
        </p>
    },
    {
        title: "Research Internship",
        subtitle: "Polytechnic University of Madrid – Environment laboratory",
        years: "2015 - 2016",
        type: "work",
        description: <p>
            Configuration of several mathematical models (WRF, CAMx and WRF-Chem ) for weather and chemical
            predictions.
        </p>
    },
    {
        title: "Bachelor's Degree in Mathematics and Informatics",
        subtitle: "Bachelor's Degree",
        years: "2012 - 2016",
        type: "education",
        description: <p>
            Bachelor's degree that provides education in both Mathematics and Informatics fields, to combine
            them. Honorific mentions in both fields.
        </p>
    },
]

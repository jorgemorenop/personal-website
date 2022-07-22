import {Certification, Role, Skill} from "../interfaces";


export const skills: Skill[] = [
    {
        name: "AWS",
        categories: [
            "cloud",
            "data engineering",
        ],
        strength: 5,
    },
    {
        name: "GCloud",
        categories: [
            "cloud",
        ],
        strength: 2,
    },
    {
        name: "Firebase",
        categories: [
            "cloud",
        ],
        strength: 2,
    },
    {
        name: "Python",
        categories: [
            "language",
            "data engineering",
            "ml & ai",
        ],
        strength: 5,
    },
    {
        name: "SQL",
        categories: [
            "language",
            "data engineering",
        ],
        strength: 4,
    },
    {
        name: "Javascript",
        categories: [
            "language",
        ],
        strength: 4,
    },
    {
        name: "Typescript",
        categories: [
            "language",
        ],
        strength: 4,
    },
    {
        name: "React",
        categories: [
            "language",
        ],
        strength: 2,
    },
    {
        name: "Bash",
        categories: [
            "language",
        ],
        strength: 2,
    },
    {
        name: "Java",
        categories: [
            "language",
        ],
        strength: 3,
    },
    {
        name: "PostgreSQL",
        categories: [
            "database",
        ],
        strength: 4,
    },
    {
        name: "MongoDB",
        categories: [
            "database",
        ],
        strength: 3,
    },
    {
        name: "Elasticsearch / ELK",
        categories: [
            "database",
        ],
        strength: 3,
    },
    {
        name: "Redshift",
        categories: [
            "database",
        ],
        strength: 5,
    },
    {
        name: "DynamoDB",
        categories: [
            "database",
        ],
        strength: 5,
    },
    {
        name: "Firestore",
        categories: [
            "database",
        ],
        strength: 2,
    },
    {
        name: "Athena (S3)",
        categories: [
            "database",
        ],
        strength: 3,
    },
    {
        name: "Delta Lake",
        categories: [
            "database",
            "data engineering",
        ],
        strength: 2,
    },
    {
        name: "Docker",
        categories: [
            "other",
        ],
        strength: 4,
    },
    {
        name: "Spark",
        categories: [
            "data engineering",
        ],
        strength: 4,
    },
]


export const roles: Role[] = [
    {
        name: "Data Engineer",
        descriptions: [
            <p>Build pipelines to (E)xtract, (T)ransform and (L)oad data in or between different systems</p>,
            <p>Choose and implement the right tool for the right job</p>,
            <p><b>Key languages</b>: Python & SQL</p>,
            <p><b>Key technologies</b>: Cloud services, Spark (w/ pyspark), pandas</p>,

        ]
    },
    {
        name: "Cloud Engineer / Architect",
        descriptions: [
            <p>Design and implement <i>scalable</i>, <i>robust</i> and <i>secure</i> solutions in the cloud</p>,
            <p>High focus on Serveless infrastructure</p>,
            <p>Broad and deep experience with <b>AWS</b></p>,
            <p>Some experience with GCloud (with Firebase) and Azure</p>,
        ]
    },
    {
        name: "DevOps & MLOps",
        descriptions: [
            <p>Automate your deployments with the best practices using pipelines, Infrastructure as Code, environment reproducibility, versioning, etc.</p>,
            <p>Apply the same techniques to build your ML models</p>,
        ]
    },
    {
        name: "Data Scientist & ML engineer",
        descriptions: [
            <p>Experience implementing and tuning ML models</p>,
            <p>Experience performing data analysis</p>,
        ]
    },
    {
        name: "Software engineer",
        descriptions: [
            <p>Focus on best practices and pragmatic approach</p>,
            <p>Try to generalize processes and build internal tools for the team benefit</p>,
            <p>Additional experience outside of the previous roles that can help in specific times
                <ul style={{listStyle: "inside"}}>
                    <li>
                        Backend: work with APIs, knowledge of networking, DNS, security,
                    </li>
                    <li>Frontend: small experience building websites and mobile apps
                    </li>
                </ul>
            </p>,

        ]
    }
]


export const certifications: Certification[] = [
    {
        name: "AWS Solutions Architect Associate",
        icon: "aws-certified-solutions-architect-associate.png",
        url: "https://www.credly.com/badges/c297ffed-0668-465b-9f8a-79ee1901143c/public_url"
    },
    {
        name: "Databricks Lakehouse Fundamentals",
        icon: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/55197915",
        url: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/55197915"
    },
]





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
            "Build pipelines to (E)xtract, (T)ransform and (L)oad data in or between different systems."
            ]
    },
    {
        name: "Cloud Engineer / Architect",
        descriptions: [
            "TODO"
            ]
    },
    {
        name: "DevOps",
        descriptions: [
            "TODO"
        ]
    },
    {
        name: "MLOps",
        descriptions: [
            "TODO"
        ]
    },
    {
        name: "Data Scientist & ML engineer",
        descriptions: [
        "TODO"
        ]
    }
]


export const certifications: Certification[] = [
    {
        name: "AWS Solutions Architect Associate",
        icon: "aws-certified-solutions-architect-associate.png",
        url: "https://www.credly.com/badges/c297ffed-0668-465b-9f8a-79ee1901143c/public_url"
    },
]





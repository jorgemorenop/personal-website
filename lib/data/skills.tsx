import {Component} from "react";

enum SkillCategory {
    Cloud = "Cloud",
    DataEngineering = "Data Engineering",
    ProgrammingLanguage = "Programming language",
    MLOps = "MLOps"
}
enum SkillRole {
    CloudEngineer = "Cloud Engineer",
    DataEngineering = "Data Engineer",
    DevOps = "DevOps",
    MLOps = "MLOps"
}

export type Skill = {
    name: string,
    // categories: SkillCategory[],
    categories: ("cloud" | "data engineering" | "language" | "database" | "ml & ai" | "other")[],
    strength: number,
}

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
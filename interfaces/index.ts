// Experience

export type ExperienceItem = {
    title: string,
    subtitle: string,
    years: string,
    description: any,
    icon?: string,
    type: "work" | "education"
}

// Resources

export type RecommendedResource = {
    title: string,
    authors: string,
    description: string,
    categories: ("data" | "machine learning" | "programming" | "cloud")[]
    type: "book" | "course",
    url: string | null
}

// Skills

export type Skill = {
    name: string,
    // categories: SkillCategory[],
    categories: ("cloud" | "data engineering" | "language" | "database" | "ml & ai" | "other")[],
    strength: number,
}

export type Role = {
    name: string,
    descriptions: any[],
}

export type Certification = {
    name: string,
    icon: string,
    url: string
}

import {Project} from "../interfaces";

// TODO(Jorge): every entry below is a PLACEHOLDER (placeholder: true). Replace with real projects:
//  - Android apps: name, one-line description, Play Store / repo link
//  - Web apps on subdomains: name, description, https://<subdomain>.jorgemoreno.co link
//  - Interesting repos: name, description, GitHub link
// Entries with placeholder: true are rendered with a "Placeholder" badge; remove the flag when real.
export const projects: Project[] = [
    {
        title: "Android app name",
        description: "Short description of the Android app goes here.",
        url: null,
        category: "android",
        placeholder: true,
    },
    {
        title: "Web app name",
        description: "Short description of the web app hosted on a subdomain goes here.",
        url: null,
        category: "web",
        placeholder: true,
    },
    {
        title: "Interesting repository",
        description: "Short description of the repository goes here.",
        url: null,
        category: "repo",
        placeholder: true,
    },
]

import * as React from 'react';

import {skills, roles, certifications} from "../data/skills";
import {MdArrowDropUp, MdArrowDropDown} from "react-icons/md";
import {useEffect} from "react";
import {Chip} from "@mui/material";
import {Skill} from "../interfaces";
import PageSection from "./PageSection";
import Collapsible from "react-collapsible";


function DetailedSkills() {
    const [category, setCategory] = React.useState('all');
    const [visibleSkills, setVisibleSkills] = React.useState(skills);

    const filterSkills = (category) => {
        let newSkills = skills;
        if (category !== "all") {
            newSkills = skills.filter(x => x.categories.includes(category))
        }

        newSkills.sort((a, b) => {
            if (a.strength !== b.strength) {
                return a.strength > b.strength ? -1 : 1;
            } else {
                return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
            }
        })
        setVisibleSkills(newSkills)
    }

    useEffect(() => {
        filterSkills(category)
    }, [category])


    const handleClick = (label) => {
        if (category !== label) {
            setCategory(label)
        }
    }

    let categories = [...new Set([].concat(...skills.map(x => x.categories)))]


    return (
        <>
            <div className="space-x-2">
                <Chip
                    label="all"
                    onClick={() => handleClick("all")}
                    key="all"
                    variant={category === "all" ? "filled" : "outlined"}
                />
                {categories.map(x => <Chip
                    label={x}
                    onClick={() => handleClick(x)} key={x}
                    variant={category === x ? "filled" : "outlined"}
                />)}

            </div>

            <ul className="w-full pt-4">
                {visibleSkills.map(SkillItem)}
            </ul>
        </>
    )
}


export default function Skills() {
    return (
        <PageSection sectionName="Skills & certifications" sectionId="skills">
            <Roles/>
            <p>If you want to check the skills and technologies in my toolkit more in detail, you can use this totally unnecessary and over-engineered skill visualization:</p>

            <div className="shadow-xl p-4 my-6 outline outline-gray-200">
                <Collapsible
                    trigger={
                        <div className="flex space-x-2 align-middle">
                            <MdArrowDropDown/>
                            Show detailed view of skills
                        </div>
                    }
                    triggerWhenOpen={
                        <div className="flex">
                            <MdArrowDropUp/>
                            Hide detailed view of skills
                        </div>
                    }>
                    <div className="pt-4">
                        <DetailedSkills/>
                    </div>
                </Collapsible>
            </div>


            <h2>Certifications</h2>
            <div className="flex justify-center gap-8">
                {certifications.map((certification) =>
                    <a key={certification.name} href={certification.url}>
                        <div className="rounded-md shadow-md w-40 p-4">
                            <img
                                src={certification.icon}
                                alt={certification.name}
                            />
                            {/*<img src={certification.icon} height={200} width={200} />*/}
                            <p style={{textAlign: "center"}}>
                                <b>{certification.name}</b>
                            </p>

                        </div>
                    </a>
                )}
            </div>


        </PageSection>
    );
}


function SkillItem(skill: Skill) {
    // let stars = '⭐️'.repeat(skill.strength)
    return (
        <li key={skill.name}>
            <div className="flex py-1 my-1 px-2 bg-blue-50 w-full">
                <div className="mr-3">
                    <p>{skill.name}</p>
                </div>
                            <div className="space-x-2 space-y-1">
                    {skill.categories.map(x => <Chip label={x} key={x}/>)}
                </div>
            </div>
        </li>
    )
}


function Roles() {
    return (<>
            <h2>Key roles</h2>

            <RolesTable>
                {roles.map(role =>
                    // <li>
                    <RoleSlot key={role.name} title={role.name}>
                        <ul className="role">
                            {role.descriptions.map(x =>
                                <li
                                    key={x}
                                    // className="role"
                                    // style={{listStyleType: "circle", listStylePosition: "inside"}}
                                >
                                    {x}
                                </li>)}
                        </ul>
                    </RoleSlot>
                )}
            </RolesTable>
        </>
    )
}


function RolesTable({children}) {
    return (
        <div className="react-pricing-table">
            <div className="flex flex-wrap">{children}</div>
        </div>
    )
}

function RoleSlot({title, highlighted = false, highlightColor="#f44336", children}) {
    return (

        <div className="Grid-cell">
            <ul className="role basic-border">
                <li
                    className={
                        (highlighted ? "highlighted" : "basic") + "-header"
                    }
                >
                    {title}
                </li>
                {children}
            </ul>
        </div>
    )
}




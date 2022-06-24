import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import {skills, roles, certifications} from "../data/skills";
import {MdWork, MdArrowDropUp, MdArrowDropDown} from "react-icons/md";
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

            <List sx={{width: '100%', maxWidth: 360}}>
                {visibleSkills.map(SkillItem)}
            </List>
        </>
    )
}


export default function Skills() {
    const collapsibleTrigger = (enabled: boolean) => {
        return
    }

    return (
        <PageSection sectionName="Skills & certifications" sectionId="skills">
            <Roles/>

            <h2>Skills</h2>

            <div className="shadow-xl p-4 mx-2 my-6">
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
            <div className="flex justify-center">
                {certifications.map((certification) =>
                    <a href={certification.url}>
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
    let stars = '⭐️'.repeat(skill.strength)
    return (
        <ListItem sx={{width: "fit-content"}}>
            <ListItemAvatar>
                <Avatar>
                    <MdWork/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={skill.name} secondary={stars} key={skill.name}/>

            <div>
                {skill.categories.map(x => <Chip label={x} key={x}/>)}

            </div>

        </ListItem>
    )
}


function Roles() {
    return (<>
            <h2>Key roles</h2>

            <RolesTable>
                {roles.map(role =>
                    // <li>
                    <RoleSlot title={role.name}>
                        <ul>
                            {role.descriptions.map(x => <li>
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
            <ul className="price basic-border">
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




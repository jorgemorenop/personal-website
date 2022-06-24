import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import {skills, roles, certifications} from "../data/skills";
import {MdWork} from "react-icons/md";
import {useEffect} from "react";
import {Card, CardContent, CardMedia, Chip, Stack, Typography} from "@mui/material";
import Link from "next/link";
import {Skill} from "../interfaces";
import PageSection from "./PageSection";
import Collapsible from "react-collapsible";


function DetailedSkills() {
    const [category, setCategory] = React.useState('all');
    const [visibleSkills, setVisibleSkills] = React.useState(skills);


    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newCategory: string,
    ) => {
        if (newCategory != null) {
            setCategory(newCategory);
        }
    };

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


    return (
        <PageSection sectionName="Roles & Skills" sectionId="skills">
            <h2>Roles</h2>
            <Roles/>

            <Collapsible trigger="Detailed Skills">
                <DetailedSkills/>
            </Collapsible>

            <h2>Certifications</h2>
            <div className="grid grid-flow-col auto-cols-max">
                {certifications.map((certification) =>
                    <div>
                <Card sx={{maxWidth: 150}}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={certification.icon}
                        alt={certification.name}
                    />
                    <CardContent>
                        {/*<img src={certification.icon} height={200} width={200} />*/}
                        <Typography variant="body2" color="text.secondary">
                            {certification.name}
                        </Typography>
                    </CardContent>
                </Card>
                        </div>
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
            {roles.map(role =>
                <li>
                    <b>{role.name}:</b> {role.description}
                </li>
            )}
        </>
    )
}


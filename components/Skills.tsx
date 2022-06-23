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


export default function Skills() {
    const [category, setCategory] = React.useState('all');
    const [visibleSkills, setVisibleSkills] = React.useState(skills);

    useEffect(() => {
        filterSkills(category)
    }, [category])

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

    let categories = [...new Set([].concat(...skills.map(x => x.categories)))]

    return (
        <section id="skills">
            <h1>Roles & Skills</h1>
            <h2>Roles</h2>
            <Roles/>
            <h2>Skills</h2>

            <ToggleButtonGroup
                color="primary"
                value={category}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="all">ALL</ToggleButton>
                {categories.map(x => <ToggleButton value={x} key={x}>{x}</ToggleButton>)}
            </ToggleButtonGroup>

            <List sx={{width: '100%', maxWidth: 360}}>
                {visibleSkills.map(SkillItem)}
            </List>

            <h2>Certifications</h2>
            {certifications.map((certification) =>
                <Card sx={{maxWidth: 250}}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={certification.icon}
                        alt="Paella dish"
                    />
                    <CardContent>
                        {/*<img src={certification.icon} height={200} width={200} />*/}
                        <Typography variant="body2" color="text.secondary">
                            {certification.name}
                        </Typography>
                    </CardContent>
                </Card>
            )}

            <h2>Courses</h2>
            <p>You can take a look to some of the courses I've completed in my <Link href={"/recommended"}>recommended</Link> list of books and courses.</p>
        </section>
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
            <Stack direction="row" spacing={1}>
                {skill.categories.map(x => <Chip label={x} key={x} />)}
            </Stack>
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


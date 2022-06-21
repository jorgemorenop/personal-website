import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import {Skill, skills} from "../lib/data/skills";
import {MdWork} from "react-icons/md";
import {useEffect} from "react";


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
        if (newCategory!=null){
            setCategory(newCategory);
        }
    };

    const filterSkills = (category) => {
        if (category === "all") {
            setVisibleSkills(skills)
        } else {
            setVisibleSkills(skills.filter(x => x.categories.includes(category)))
        }
    }

    let categories = [...new Set([].concat(...skills.map(x => x.categories)))]

    return (
        <section id="skills">
            <h1>Skills</h1>

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
        </section>
    );
}


function SkillItem(skill: Skill) {
    let stars = '⭐️'.repeat(skill.strength)
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <MdWork/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={skill.name} secondary={stars} key={skill.name}/>
        </ListItem>
    )
}

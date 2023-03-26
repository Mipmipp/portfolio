import React from "react";
import { Grid, Typography } from "@mui/material";
import Presentation from "./main-components/Presentation.jsx";
import ProjectCard from "./main-components/ProjectCard.jsx";
import Skills from "./main-components/Skills.jsx";
import { experience as cardsInformation } from "../data/experience.js";
import "./Main.css";

export default function Main() {
    return (
        <>
            <div id="main-presentation">
                <Presentation />
            </div>
            <div id="projects">
                <Typography id="project-title">Experience</Typography>
                <Grid container spacing={3} mb="100px">
                    {cardsInformation.map((props) => (
                        <Grid
                            item
                            xs={12}
                            md={4}
                            key={props.imagePath}
                            className="grid-item"
                        >
                            <ProjectCard {...props} key={props.title} />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div id="skills">
                <Typography id="skills-title">Skills</Typography>
                <Skills />
            </div>
        </>
    );
}

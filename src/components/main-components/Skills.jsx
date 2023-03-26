import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import TypeIt from "typeit-react";
import { skills } from "../../data/skills.js";
import "./Skills.css";

export default function Skills() {
    return (
        <Box sx={{ flexGrow: 1 }} id="container-skills">
            <Grid id="grid-skills" container spacing={{ xs: 5 }}>
                {skills.map((props) => (
                    <Grid xs={6} md={3} key={props.imagePath}>
                        <Tooltip title={props.title}>
                            <img
                                src={require(`../../assets/skills-images/${props.imagePath}.png`)}
                                alt={props.title + ` icon`}
                                className="skill-icon"
                            />
                        </Tooltip>
                    </Grid>
                ))}
            </Grid>
            <div id="skills-quote-container">
                <TypeIt
                    id="skills-quote-text"
                    options={{
                        strings: [
                            "I love learning new things to improve the quality of my code",
                        ],
                        waitUntilVisible: true,
                        startDelay: 150,
                    }}
                />
            </div>
        </Box>
    );
}

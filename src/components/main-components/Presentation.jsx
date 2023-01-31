import React from "react";
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion"
import TypeIt from "typeit-react";
import "./Presentation.css";

function Presentation() {
    return(
        <div id="presentation-container">
            <Typography
                id="h3"
                variant="h3"
                component={motion.h4} 
                initial={{y: -50}} 
                animate={{y: 0}}
                transition={{duration: 1.1}}
            >
                Hi. I'm <span>Sebastian</span>!
            </Typography>
            <TypeIt
                id="typeit-text"
                options={{
                    strings: ["you can tell me Mipmipp"], 
                    speed: 110, 
                    waitUntilVisible: true
                }}
            />
            <Typography 
                variant="h4"
                component={motion.h4}
                initial={{y: -50}} 
                animate={{y: 0}}
                transition={{duration: 1.6}}
            >
                I'm <span>front-end developer</span> and I work with <span>React</span>.
            </Typography>
            <Button
                variant="outlined"
                size="large"
                component={motion.button} 
                initial={{y: 100}} 
                animate={{y: 0}}
                transition={{duration: 1.6}}
            >
                download cv
            </Button>
        </div>
    )
}

export default Presentation;
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { IconButton, Box, Button, Link } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import TypeIt from "typeit-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
    titleAnimationVariants,
    informationAnimationVariants,
    buttonAnimationVariants,
} from "../../data/animations";
import "./Presentation.css";

export default function Presentation() {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div id="presentation-container">
            <motion.h1
                id="title"
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={titleAnimationVariants}
            >
                Hi. I'm <span>Sebastian</span>!
            </motion.h1>
            <TypeIt
                id="typeit-text"
                options={{
                    strings: ["you can tell me Mipmipp"],
                    waitUntilVisible: true,
                    speed: 110,
                    startDelay: 1000,
                }}
            />
            <motion.h4
                id="second-text"
                variant="h4"
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={informationAnimationVariants}
            >
                I'm a <span>front-end developer</span> and I work with{" "}
                <span>React</span>.
            </motion.h4>
            <Box id="presentation-buttons">
                <Button
                    id="cv-button"
                    variant="outlined"
                    size="large"
                    component={motion.button}
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={buttonAnimationVariants}
                >
                    download cv
                </Button>
                <Link
                    href="https://github.com/Mipmipp"
                    target="_blank"
                    underline="none"
                >
                    <Button
                        startIcon={<GitHubIcon id="github-icon" />}
                        size="small"
                        color="primary"
                        component={motion.button}
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={buttonAnimationVariants}
                        id="github-presentation-container"
                    >
                        <p id="github-text">Visit GitHub</p>
                    </Button>
                </Link>
            </Box>
        </div>
    );
}

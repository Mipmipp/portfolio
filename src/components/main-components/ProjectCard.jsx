import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion, useAnimation } from "framer-motion";
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    CardMedia,
} from "@mui/material";
import { cardAnimationVariants } from "../../data/animations";
import "./ProjectCard.css";

export default function ProjectCard(card) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <Card
            className="card"
            component={motion.div}
            ref={ref}
            animate={controls}
            initial="hidden"
            variant="outlined"
            variants={cardAnimationVariants}
        >
            <CardMedia
                component="img"
                alt={card.title + ` preview deploy`}
                height="220"
                image={require(`../../assets/cards-images/${card.imagePath}.png`)}
            />
            <CardContent className="card-content">
                <Typography className="card-title" component="div">
                    {card.title}
                </Typography>
                <Typography className="card-text">
                    {card.description}
                </Typography>
            </CardContent>
            <CardActions className="card-box-button">
                <Button
                    className="card-button-demo"
                    component={motion.a}
                    href={card.deploy}
                    target="_blank"
                >
                    deploy
                </Button>
                <Button
                    className="card-button-github"
                    component={motion.a}
                    href={card.githubLink}
                    target="_blank"
                >
                    <GitHubIcon size="largue" />
                </Button>
            </CardActions>
        </Card>
    );
}

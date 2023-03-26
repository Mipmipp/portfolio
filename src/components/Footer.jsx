import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Button, IconButton, Divider, Link } from "@mui/material";
import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
    return (
        <>
            <Grid container id="footer-container">
                <Grid xs="12" id="footer-grid">
                    <p>Contact me</p>
                </Grid>
                <Grid xs={12} id="footer-buttons">
                    <div>
                        <Tooltip title="GitHub">
                            <Link
                                href="https://github.com/Mipmipp"
                                target="_blank"
                                underline="none"
                            >
                                <IconButton
                                    className="footer-button"
                                    component={motion.button}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <GitHubIcon size="largue" />
                                </IconButton>
                            </Link>
                        </Tooltip>
                        <Tooltip title="Linkedin">
                            <Link
                                href="https://www.linkedin.com/in/sebastianHernando"
                                target="_blank"
                                underline="none"
                            >
                                <IconButton
                                    className="footer-button"
                                    component={motion.button}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <LinkedInIcon size="largue" />
                                </IconButton>
                            </Link>
                        </Tooltip>
                        <Tooltip title="Mail">
                            <Link
                                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=imipmipp@gmail.com"
                                target="_blank"
                                underline="none"
                            >
                                <IconButton
                                    className="footer-button"
                                    component={motion.button}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <EmailIcon size="largue" />
                                </IconButton>
                            </Link>
                        </Tooltip>
                    </div>
                </Grid>
                <Grid xs={12} id="footer-container-cv-button">
                    <Button
                        id="footer-cv-button"
                        variant="outlined"
                        size="large"
                    >
                        download cv
                    </Button>
                </Grid>
                <Grid xs={12} id="footer-container-information">
                    <Divider id="footer-divider" />
                    <p id="footer-text-information">Mipmipp</p>
                </Grid>
                <Grid xs={12} id="footer-copyright">
                    <p id="footer-text-information">
                        © all rights reserved 2023
                    </p>
                </Grid>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    id="wave"
                >
                    <path
                        fill="var(--mui-palette-fill-main)"
                        fillOpacity="1"
                        d="M0,96L30,106.7C60,117,120,139,180,138.7C240,139,300,117,360,112C420,107,480,117,540,133.3C600,149,660,171,720,181.3C780,192,840,192,900,165.3C960,139,1020,85,1080,90.7C1140,96,1200,160,1260,202.7C1320,245,1380,267,1410,277.3L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                    ></path>
                </svg>
            </Grid>
        </>
    );
}

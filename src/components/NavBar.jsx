import React from "react";
import { AppBar, Box, Toolbar, Typography, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import ModeSwitcher from "./ModeSwitcher";
import "./NavBar.css";

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar id="nav" component="nav">
                <Toolbar>
                    <Typography
                        id="nav-creator-name"
                        variant="h6"
                        sx={{ flexGrow: 1 }}
                        component={motion.div}
                        initial={{
                            color: "var(--mui-palette-terciaryText-main)",
                        }}
                        whileHover={{
                            color: "var(--mui-palette-importantText-main)",
                        }}
                    >
                        Mipmipp
                    </Typography>
                    <Box id="nav-box-button">
                        <ModeSwitcher />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

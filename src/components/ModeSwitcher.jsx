import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useColorScheme } from "@mui/material/styles";

export default function ModeSwitcher() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Tooltip title="Change theme">
            <IconButton
                size="large"
                color="primary"
                component={motion.button}
                initial={{
                    color: "var(--mui-palette-terciaryText-main)",
                }}
                whileHover={{
                    color: "var(--mui-palette-importantText-main)",
                }}
                onClick={() => {
                    if (mode === "light") {
                        setMode("dark");
                    } else {
                        setMode("light");
                    }
                }}
            >
                <Brightness4Icon id="change-theme-icon" />
            </IconButton>
        </Tooltip>
    );
}

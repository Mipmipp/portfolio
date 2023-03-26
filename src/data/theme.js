import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

export const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primaryBackground: {
                    main: "linear-gradient(to right, #1d0611, #260313)",
                },
                lightBackground: {
                    main: "#ffffff",
                },
                darkBackground: {
                    main: "#f8f9fb",
                },
                cardBorder: {
                    main: "#fbebf0",
                },
                surfaceOnLightBackground: {
                    main: "#fbebf0",
                },
                surfaceOnDarkBackground: {
                    main: "#ffffff",
                },
                primaryText: {
                    main: "#ffffff",
                },
                secondaryText: {
                    main: "#000000",
                },
                terciaryText: {
                    main: "#6e6b6b",
                },
                importantText: {
                    main: "#ee4c7c",
                    dark: "#a63556",
                },
                fill: {
                    main: "#1d0611",
                },
            },
        },
        dark: {
            palette: {
                primaryBackground: {
                    main: "linear-gradient(to right, #14040b, #1a020d)",
                },
                lightBackground: {
                    main: "#2a2e39",
                },
                darkBackground: {
                    main: "#26292e",
                },
                cardBorder: {
                    main: "#26292e",
                },
                surfaceOnLightBackground: {
                    main: "#deccdb",
                },
                surfaceOnDarkBackground: {
                    main: "#34373c",
                },
                primaryText: {
                    main: "#c3c3c3",
                },
                secondaryText: {
                    main: "#c3c3c3",
                },
                terciaryText: {
                    main: "#6e6b6b",
                },
                importantText: {
                    main: "#c280b1",
                    dark: "#97658b",
                },
                fill: {
                    main: "#1d0611",
                },
            },
        },
    },
});

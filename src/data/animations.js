export const titleAnimationVariants = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.2 } },
    hidden: { opacity: 0, scale: 0, y: -50 },
};

export const informationAnimationVariants = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.6 } },
    hidden: { opacity: 0, scale: 0, y: -50 },
};

export const buttonAnimationVariants = {
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 1.6 },
    },
    hidden: { opacity: 0, scale: 0, y: 100 },
};

export const cardAnimationVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
};

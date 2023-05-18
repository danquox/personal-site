export const container = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0,
            staggerChildren: 0.15
        }
    }
}

export const containerChildren = {
    hidden: {
        opacity: 0,
        y: "20px"
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            opacity: {
                duration: 0.6
            },
            type: "ease"
        }
    }
}
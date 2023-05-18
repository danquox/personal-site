export const socialContainer = {
    shidden: {
        opacity: 0
    },
    svisible: {
        opacity: 1,
        transition: {
            delayChildren: 0.75,
            staggerChildren: 0.15
        }
    }
}

export const socialContainerChildren = {
    shidden: {
        opacity: 0,
    },
    svisible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            opacity: {
                duration: 0.6
            }
        }
    }
}
import { motion, type Variants } from "framer-motion";

const loaderVariants: Variants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: 'mirror',
                duration: .5
            },
            y: {
                repeat: Infinity,
                repeatType: 'mirror',
                duration: .25,
                ease: "easeOut"
            }
        }
    }
};

export default function Loader() {
    return (
        <motion.div 
            className="loader"
            variants={loaderVariants}
            animate="animationOne"
        >
        </motion.div>
    )
}
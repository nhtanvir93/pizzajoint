import { motion, useCycle, type Variants } from "framer-motion";

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
    },
    animationTwo: {
        x: [-30, 30],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: 'mirror',
                duration: .5
            }
        }
    }
};

export default function Loader() {
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

    return (
        <div className="loader-container">
            <motion.div 
                className="loader"
                variants={loaderVariants}
                animate={animation}
            >
            </motion.div>
            <p onClick={() => cycleAnimation()}>Cycle Loader</p>
        </div>
    )
}
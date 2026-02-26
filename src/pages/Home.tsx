import { useNavigate } from "react-router-dom"
import session from "../utilities/session";
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5, 
            duration: 3
        }
    }
} as const;

const createButtonVariants = {
    hover: {
        scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
        textShadow: '0px 0px 20px #fff',
        boxShadow: '0px 0px 8px #fff',
    }
} as const;

export default function Home() {
    const navigate = useNavigate();

    const start = () => {
        session.clear();
        navigate('/base');
    };

    return (
        <motion.div 
            className="home"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h2>Welcome to Pizza Joint</h2>
            <motion.button 
                type="button" 
                onClick={start}
                variants={createButtonVariants}
                whileHover="hover"
            >
                Create Your Pizza
            </motion.button>
        </motion.div>
    )
}
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import session from "../utilities/session";
import { motion } from 'framer-motion';

const backButtonVariants = {
    hover: {
        scale: 1.1,
        textShadow: '0px 0px 20px #fff',
        boxShadow: '0px 0px 8px #fff',
        transition: {
            repeat: Infinity,
            duration: 0.4
        }
    }
} as const;

const containerVariants = {
    hidden: {
        x: 0
    },
    visible: {
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            when: 'beforeChildren',
            staggerChildren: 0.3
        }
    }
} as const;

const childVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    },
} as const;

export default function Order() {
    const navigate = useNavigate();
    const base = session.getItem("base");
    const toppings = session.getItem("toppings") as string[] | null;

    useEffect(() => {
        if (!base) navigate("/base");
        else if (!toppings || toppings.length === 0) navigate("/toppings");
    }, [base, toppings, navigate]);

    if (!base || !toppings || toppings.length === 0) return null;

    const startAgain = () => {
        session.clear();
        navigate("/");
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h2 className="centered-text">Thank you for your order :)</h2>
            <motion.p 
                className="centered-text"
                variants={childVariants}
            >
                You ordered a <span className="highlight">{base}</span> with:
            </motion.p>
            <motion.ul
                variants={childVariants}
            >
                {toppings.map(topping => (
                    <li key={topping} className="highlight centered-text">{topping}</li>
                ))}
            </motion.ul>
            <div className="action-container">
                <motion.button 
                    type="button" 
                    onClick={startAgain}
                    variants={backButtonVariants}
                    whileHover="hover"
                >
                    Back to Create Your Pizza
                </motion.button>
            </div>
        </motion.div>
    );
}
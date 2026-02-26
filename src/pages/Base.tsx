import { useState } from "react";
import { useNavigate } from "react-router-dom";
import session from "../utilities/session";
import { motion } from 'framer-motion';

const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'] as const;

const containerVariants = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring', 
            mass: 0.4,
            damping: 8,
            when: 'beforeChildren',
            staggerChildren: 0.3
        }
    }
} as const;

const listItemVariants = {
    hover: {
        originX: 0,
        scale: 1.3, 
        color: '#f8e112', 
        transition: {type: 'spring', stiffness: 300}
    }
} as const;

const nextButtonContainerVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: { 
            duration: 0.1, 
            type: 'spring', 
            stiffness: 80 
        }
    }
} as const;

const nextButtonVariants = {
    hover: {
        scale: 1.1,
        textShadow: '0px 0px 20px #fff',
        boxShadow: '0px 0px 8px #fff',
        transition: {duration: 0.1}
    }
} as const;

export default function Base() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState<typeof bases[number] | "">("");

    const next = () => {
        if (!selected) return;
        session.setItem("base", selected);
        navigate("/toppings");
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h2 className="action-title">Step 1 : Choose Your Base</h2>
            <ul role="listbox">
                {bases.map((base) => (
                    <motion.li
                        key={base}
                        role="option"
                        className={selected === base ? "selected-item" : ""}
                        onClick={() => setSelected(base)}
                        variants={listItemVariants}
                        whileHover="hover"
                    >
                        {selected === base && <span className="selected-item-icon">{'>'}</span>}
                        {base}
                    </motion.li>
                ))}
            </ul>
            {
                selected &&
                <motion.div
                    variants={nextButtonContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.button 
                        type="button" 
                        onClick={next} disabled={!selected}
                        variants={nextButtonVariants}
                        whileHover="hover"
                    >
                        Next
                    </motion.button>
                </motion.div>
            }
        </motion.div>
    );
}
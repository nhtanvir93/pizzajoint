import { useState } from "react";
import session from "../utilities/session";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const toppings = ['Mushrooms', 'Peppers', 'Onion', 'Olives', 'Extra Cheese', 'Tomatoes'] as const;

const listItemVariants = {
    hover: {
        originX: 0,
        scale: 1.3, 
        color: '#f8e112',
        transition: {type: 'spring', stiffness: 300}
    }
} as const;

const orderButtonContainerVariants = {
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

const orderButtonVariants = {
    hover: {
        scale: 1.1,
        textShadow: '0px 0px 20px #fff',
        boxShadow: '0px 0px 8px #fff',
        transition: {duration: 0.1}
    }
} as const;

export default function Topping() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState<string[]>([]);

    const toggleTopping = (item: string) => {
        setSelected(prev =>
            prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
    };

    const next = () => {
        session.setItem("toppings", selected);
        navigate("/order");
    };

    return (
        <div>
            <h2 className="action-title">Step 2 : Choose Toppings</h2>
            <ul role="listbox">
                {toppings.map(topping => (
                    <motion.li
                        key={topping}
                        role="option"
                        className={selected.includes(topping) ? "selected-item" : ""}
                        onClick={() => toggleTopping(topping)}
                        variants={listItemVariants}
                        whileHover="hover"
                    >
                        {selected.includes(topping) && <span className="selected-item-icon">{'>'}</span>}
                        {topping}
                    </motion.li>
                ))}
            </ul>
            {
                selected.length > 0 &&
                <motion.div
                    variants={orderButtonContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.button 
                        type="button" 
                        onClick={next} 
                        disabled={selected.length === 0}
                        variants={orderButtonVariants}
                        whileHover="hover"
                    >
                        Order
                    </motion.button>
                </motion.div>
            }
        </div>
    );
}
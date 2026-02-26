import { useState } from "react";
import { useNavigate } from "react-router-dom";
import session from "../utilities/session";
import { motion } from 'framer-motion';

const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'] as const;

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
            initial={{x: '100vw'}}
            animate={{x: 0}}
            transition={{type: 'spring', delay: 0.5}}
        >
            <h2 className="action-title">Step 1 : Choose Your Base</h2>
            <ul role="listbox">
                {bases.map((base) => (
                    <li
                        key={base}
                        role="option"
                        className={selected === base ? "selected-item" : ""}
                        onClick={() => setSelected(base)}
                    >
                        {selected === base && <span className="selected-item-icon">{'>'}</span>}
                        {base}
                    </li>
                ))}
            </ul>
            {
                selected &&
                <motion.div
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{ duration: 0.1, type: 'spring', stiffness: 80 }}
                >
                    <button 
                        type="button" 
                        onClick={next} disabled={!selected}
                    >
                        Next
                    </button>
                </motion.div>
            }
        </motion.div>
    );
}
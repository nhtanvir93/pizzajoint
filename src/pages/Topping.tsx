import { useState } from "react";
import session from "../utilities/session";
import { useNavigate } from "react-router-dom";

const toppings = ['Mushrooms', 'Peppers', 'Onion', 'Olives', 'Extra Cheese', 'Tomatoes'] as const;

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
                    <li
                        key={topping}
                        role="option"
                        className={selected.includes(topping) ? "selected-item" : ""}
                        onClick={() => toggleTopping(topping)}
                    >
                        {selected.includes(topping) && <span className="selected-item-icon">{'>'}</span>}
                        {topping}
                    </li>
                ))}
            </ul>
            <button type="button" onClick={next} disabled={selected.length === 0}>
                Order
            </button>
        </div>
    );
}
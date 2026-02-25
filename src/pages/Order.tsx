import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import session from "../utilities/session";

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
        <div>
            <h2>Thank you for your order :)</h2>
            <p className="centered-text">
                You ordered a <span className="highlight">{base}</span> with:
            </p>
            <ul>
                {toppings.map(topping => (
                    <li key={topping} className="highlight centered-text">{topping}</li>
                ))}
            </ul>
            <div className="action-container">
                <button type="button" onClick={startAgain}>Back to Create Your Pizza</button>
            </div>
        </div>
    );
}
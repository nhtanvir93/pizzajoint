import { useNavigate } from "react-router-dom";
import session from "../utilities/session";

export default function NotFound() {
    const navigate = useNavigate();

    const startAgain = () => {
        session.clear();
        navigate("/");
    };

    return (
        <div>
            <h2 className="centered-text">Not Found</h2>
            <div className="action-container">
                <button type="button" onClick={startAgain}>Back to Create Your Pizza</button>
            </div>
        </div>
    )
}
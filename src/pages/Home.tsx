import { useNavigate } from "react-router-dom"
import session from "../utilities/session";

export default function Home() {
    const navigate = useNavigate();

    const start = () => {
        session.clear();
        navigate('/base');
    };

    return (
        <div className="home">
            <h2>Welcome to Pizza Joint</h2>
            <button type="button" onClick={start}>Create Your Pizza</button>
        </div>
    )
}
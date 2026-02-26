import { useNavigate } from "react-router-dom"
import session from "../utilities/session";
import { motion } from 'framer-motion';

export default function Home() {
    const navigate = useNavigate();

    const start = () => {
        session.clear();
        navigate('/base');
    };

    return (
        <motion.div 
            className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <h2>Welcome to Pizza Joint</h2>
            <button type="button" onClick={start}>Create Your Pizza</button>
        </motion.div>
    )
}
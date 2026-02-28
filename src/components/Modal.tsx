import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import session from "../utilities/session";

const modalVariants = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            mass: 4
        }
    },
    exit: {
        y: '-100vh'
    }
};

const actionButtonVariants = {
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

export default function Modal({open, onClose} : {open: boolean, onClose: () => void}) {
    const navigate = useNavigate();

    const startAgain = () => {
        session.clear();
        navigate('/')
    };

    return createPortal(
        <AnimatePresence mode="wait">
            {
                open && (
                    <motion.div 
                        className="backdrop"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                    >
                        <motion.div 
                            className="modal"
                            variants={modalVariants}
                        >
                            <p>Want to make another pizza ?</p>
                                <motion.button 
                                    type="button"
                                    variants={actionButtonVariants}
                                    whileHover="hover"
                                    onClick={startAgain}
                                >
                                    Start Again
                                </motion.button>
                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>,
        document.body
    );
}
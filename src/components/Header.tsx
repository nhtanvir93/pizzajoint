import { motion } from 'framer-motion';

const brandContainerVariants = {
  hidden: {
    y: -250
  },
  visible: {
    y: -10,
    transition: {
      delay: 0.3, 
      type: 'spring', 
      stiffness: 120
    }
  }
} as const;

export default function Header() {
  return (
    <div className="header">
      <div className="brand-icon">
        <svg
          width="80"
          height="80"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 1A23 23 0 1 0 47 24H24Z"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M30 1V18H47A17 17 0 0 0 30 1Z"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <motion.div
        className="brand-title"
        variants={brandContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </div>
  );
}
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

const svgVariants = {
  hidden: {
    rotate: -180
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1
    }
  }
} as const;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
} as const;

export default function Header() {
  return (
    <div className="header">
      <div className="brand-icon">
        <motion.svg
          width="80"
          height="80"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M24 1A23 23 0 1 0 47 24H24Z"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
          />

          <motion.path
            d="M30 1V18H47A17 17 0 0 0 30 1Z"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
          />
        </motion.svg>
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
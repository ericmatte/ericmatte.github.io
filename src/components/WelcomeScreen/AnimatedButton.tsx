import { type ReactNode } from "react";
import { useState } from "react";

import { motion, MotionConfig } from "framer-motion";

import "./styles.css";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

const AnimatedButton = ({ children, onClick }: Props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <MotionConfig
      transition={{
        type: "spring",
        duration: 0.7,
        bounce: 0.2,
      }}
    >
      <motion.button
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.5 },
          press: { scale: 1.4 },
        }}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
      >
        <motion.div
          className="shapes"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        >
          <div className="pink blush" />
          <div className="blue blush" />
        </motion.div>
        <motion.div variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }} className="label">
          {children}
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
};

export default AnimatedButton;

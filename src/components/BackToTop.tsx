import { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const BackToTop: FC = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowArrow(window.pageYOffset > 200);
    };

    addEventListener("scroll", toggleVisibility);
    return () => removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {showArrow && (
        <motion.div
          className="back-to-top"
          onClick={() => {
            scrollTo({
              top: 0,
              behavior: "smooth"
            });
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <FiArrowUp size={24} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;

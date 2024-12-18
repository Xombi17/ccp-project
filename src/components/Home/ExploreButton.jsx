import { motion } from 'framer-motion';
import './ExploreButton.css';

const ExploreButton = () => {
  const handleClick = () => {
    window.location.href = 'https://xombi17-streamlit-map-cultural-map-xpfuqj.streamlit.app/'; // Replace with your desired URL
  };

  return (
    <motion.button
      className="explore-button"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 25px rgba(255,255,255,0.5)"
      }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }}
    >
      <span className="button-text">Explore Map</span>
      <motion.span
        className="button-shine"
        animate={{
          x: ["0%", "100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />
    </motion.button>
  );
};

export default ExploreButton;
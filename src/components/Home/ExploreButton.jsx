import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './ExploreButton.css';

const ExploreButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      className="explore-button"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 25px rgba(255,255,255,0.5)"
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate('/map')}
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
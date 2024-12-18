import { motion } from 'framer-motion';
import ExploreButton from './ExploreButton';

const HomeContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-content"
    >
      <h1 className="title">
        <span className="welcome-text">Welcome to</span>
        <span className="diversity-text">Diversity of India</span>
      </h1>
      <p className="description">
        Explore the rich cultural heritage, traditions, and diversity of India's states
        and territories through our interactive journey.
      </p>
      <ExploreButton />
    </motion.div>
  );
};

export default HomeContent;
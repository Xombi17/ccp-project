import VideoBackground from './VideoBackground';
import HomeContent from './HomeContent';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <VideoBackground />
      <div className="content-overlay">
        <HomeContent />
      </div>
    </div>
  );
};

export default Home;
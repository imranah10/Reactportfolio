import Hero from './Hero';
import Marquee from './Marquee';
import ProofStrip from './ProofStrip';

const Home = ({ children }) => {
  return (
    <div className="relative">
      <Hero />
      <Marquee />
      <ProofStrip />
      {children}
    </div>
  );
};

export default Home;

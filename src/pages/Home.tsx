import HeroSection from '../components/HeroSection';
import InvestmentSection from '../components/InvestmentSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import CommitmentSection from '../components/CommitmentSection';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <InvestmentSection />
      <WhoWeAreSection />
      <CommitmentSection />
      <ContactForm />
    </div>
  );
};

export default Home;

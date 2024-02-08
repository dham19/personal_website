import FlippingCard from './components/FlippingCard';
import Navbar from './components/Navbar';
import WhiteDivider from './components/WhiteDivider';
import Contact from './components/Contact';
import About from './components/About';
import GetEssay from './components/GetEssay';
import MobileSections from './components/MobileSections';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='hidden md:block'>
        <FlippingCard />
      </div>
      <div className='block md:hidden'>
        <MobileSections />
      </div>
      <WhiteDivider />
      <About>
        <GetEssay />
      </About>
      <Contact />
    </main>
  );
}

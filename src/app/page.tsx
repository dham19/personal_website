import FlippingCard from "./components/FlippingCard";
import Navbar from "./components/Navbar";
import WhiteDivider from "./components/WhiteDivider";
import Contact from "./components/Contact";
import About from "./components/About";
import GetEssay from "./components/GetEssay";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FlippingCard />
      <WhiteDivider />
      <About>
        <GetEssay />
      </About>
      <Contact />
    </main>
  );
}

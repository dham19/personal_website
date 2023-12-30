import Link from "next/link";
import FlippingCard from "./components/FlippingCard";
import Image from "next/image";
import TestButton from "./components/TestButton";
import Navbar from "./components/Navbar";
import WhiteDivider from "./components/WhiteDivider";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FlippingCard />
      <WhiteDivider />
      {/* <Experience /> */}
      <About />
      <Contact />
    </main>
  );
}

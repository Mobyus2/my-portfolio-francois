import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Skills from "../components/Skills.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Footer />
    </>
  );
}

export default Home;

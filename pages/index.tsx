import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Education from "../components/Education";
import FirstIntro from "../components/FirstIntro";
import Footer from "../components/Footer";
import Interest from "../components/Interest";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Preyansh Patel</title>
      </Head>
      <Navbar />
      <FirstIntro />
      <AboutMe />
      <Interest />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

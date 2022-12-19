import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import FirstIntro from "../components/FirstIntro";
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
    </>
  );
}

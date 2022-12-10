import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import FirstIntro from "../components/FirstIntro";
import Interest from "../components/Interest";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <FirstIntro />
      <AboutMe />
      <Interest />
      <Education />
    </>
  );
}

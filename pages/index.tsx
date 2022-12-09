import AboutMe from "../components/AboutMe";
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
    </>
  );
}

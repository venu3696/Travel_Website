import Navbar from "../Components/Navbar";
import HomeHero from "../Components/HomeHero";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import AboutImg from "../assets/night.jpg";

function About() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;

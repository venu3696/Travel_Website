import Navbar from "../Components/Navbar";
import HomeHero from "../Components/HomeHero";
import AboutImg from "../assets/night.jpg";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;

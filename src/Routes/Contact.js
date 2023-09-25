import Navbar from "../Components/Navbar";
import HomeHero from "../Components/HomeHero";
import AboutImg from "../assets/2.jpg";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;

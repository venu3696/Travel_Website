import Navbar from "../Components/Navbar";
import HomeHero from "../Components/HomeHero";
import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero"
        heroImg="https://img.freepik.com/premium-photo/road-mountains-with-cloudy-sky-generative-ai_860599-4588.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnClass="show"
        buttonText="Travel Plan"
        url="/"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;

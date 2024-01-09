import HomeHeader from "../components/homeSections/HomeHeader";
import Faq from "../components/homeSections/Faq";
import Hero from "../components/homeSections/Hero";
import Detail from "../components/homeSections/Detail";
import Testimonials from "../components/homeSections/Testimonials";
import Functionalities from "../components/homeSections/Functionalities";
const Home = () => {
  return (
    <main className="bg-base overflow-hidden px-10 lg:px-0">
      <HomeHeader />
      <Hero />
      <Detail />
      <Functionalities />
      <Testimonials />
      <Faq />
    </main>
  );
};

export default Home;

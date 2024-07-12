import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import SearchSection from "../../components/SearchSection/SearchSection";
import SpecialisationSection from "../../components/SpecialisationSection/SpecialisationSection";

const Home = () => {

    return (
        <div>
            <Navbar />
            <HeroSection />
            <SearchSection />
            <SpecialisationSection />
        </div>
    );
}

export default Home;
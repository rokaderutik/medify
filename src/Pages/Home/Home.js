import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import SearchSection from "../../components/SearchSection/SearchSection";
import SpecialisationSection from "../../components/SpecialisationSection/SpecialisationSection";
import AddSection from "../../components/AddSection/AddSection";

const Home = () => {

    return (
        <div>
            <Navbar />
            <HeroSection />
            <SearchSection />
            <AddSection />
            <SpecialisationSection />
            
        </div>
    );
}

export default Home;
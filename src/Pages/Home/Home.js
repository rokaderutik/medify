import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import SearchSection from "../../components/SearchSection/SearchSection";
import SpecialisationSection from "../../components/SpecialisationSection/SpecialisationSection";
import AddSection from "../../components/AddSection/AddSection";
import MedicalSpecialistSection from "../../components/MedicalSpecialistSection/MedicalSpecialistSection";
import PatientCaringSection from "../../components/PatientCaringSection/PatientCaringSection";
import NewsSection from "../../components/NewsSection/NewsSection";
import OurFamiliesSection from "../../components/OurFamiliesSection/OurFamiliesSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import DownloadAppSection from "../../components/DownloadAppSection/DownloadAppSection";
import Footer from "../../components/Footer/Footer";

const Home = () => {

    return (
        <div>
            <Navbar />
            <HeroSection />
            <SearchSection />
            <AddSection />
            <SpecialisationSection />
            <MedicalSpecialistSection />
            <PatientCaringSection />
            <NewsSection />
            <OurFamiliesSection />
            <FAQSection />
            <DownloadAppSection />
            <Footer />
        </div>
    );
}

export default Home;
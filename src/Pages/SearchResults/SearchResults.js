import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchSection from "../../components/SearchSection/SearchSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import DownloadAppSection from "../../components/DownloadAppSection/DownloadAppSection";
import Footer from "../../components/Footer/Footer";
import SearchResultSection from "../../components/SearchResultSection/SearchResultSection";

export default function SearchResults() {
    const { state } = useLocation();    //locations object state, not the state value
    const navigate = useNavigate();

    const [stateName, setStateName] = useState(state ? state.stateName : '');
    const [cityName, setCityName] = useState(state ? state.cityName : '');

    const [resultsList, setResultsList] = useState([]);

    // set booking list
    const [bookingsList, setBookingsList] = useState([]);
    
    useEffect(() => {
        localStorage.setItem('bookingsList', JSON.stringify(bookingsList));
    }, [bookingsList]);

    useEffect(() => {
        if(!state) {
            navigate('/');
        } else {

            async function fetchData() {
                const { stateName, cityName} = state;
                setCityName(cityName);
                setStateName(stateName);

                try {
                    const url = `https://meddata-backend.onrender.com/data?state=${stateName}&city=${cityName}`;
                    const res = await fetch(url);
                    const data = await res.json();
                    setResultsList(data);
                } catch(e) {
                    
                }
            }

            fetchData();
        }

    }, []);

    return (
        <div>
            <Navbar />
            <SearchSection 
                setResultsList={setResultsList}
                setCityName={setCityName}
            />
            <SearchResultSection 
                resultsList={resultsList}
                cityName={cityName}
                setBookingsList={setBookingsList}
                bookingsList={bookingsList}
            />
            <FAQSection />
            <DownloadAppSection />
            <Footer />
        </div>
    );
}
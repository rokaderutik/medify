import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchSection from "../../components/SearchSection/SearchSection";
import SearchResultSection from "../../components/SearchResultSection/SearchResultSection";
import DownloadAppSection from "../../components/DownloadAppSection/DownloadAppSection";
import Footer from "../../components/Footer/Footer";


/**
 * MyBookings Component/Page
 *
 * @returns 
 */
export default function MyBookings() {
    const [bookingsList, setBookingsList] = useState([]);

    useEffect(() => {
        const list = localStorage.getItem("bookingsList");
        if(list) {
            setBookingsList(JSON.parse(list));
        }
    }, []);

    return (
        <div>
            <Navbar />
            <SearchSection 
                resultsList={bookingsList}
            />
            <SearchResultSection 
                resultsList={bookingsList}
            />
            <DownloadAppSection />
            <Footer />
        </div>
    );
}
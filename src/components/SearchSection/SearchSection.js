import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";
import SearchIcon from '@mui/icons-material/Search';
import styles from "./SearchSection.module.css";
import Ambulance from "../../assets/Ambulance.png"
import Capsule from "../../assets/Capsule.png";
import Doctor from "../../assets/Doctor.png";
import Hospital from "../../assets/Hospital.png";
import DrugStore from "../../assets/Drugstorelabs.png";

/**
 * Card component: for the category cards present below the search bar, 
 * which are present on Home pages search component
 * @param {image} Icon 
 * @param {string} title
 * @returns
 */
const Card = ({ Icon, title }) => {

    return (
        <div className={styles.card} onClick={() => {}}>
            <img src={Icon}  alt={title} />
            <h4>{title}</h4>
        </div>
    );
};

/**
 * SearchSection Component: Search section for all pages
 * @param {Function} setResultsList
 *  for setting the list of available medical centers in search state & city
 * 
 * @param {Function} setCityName
 * for setting the name of currently selected city
 * 
 * @param {Array<Object>} resultsList
 * array of bookings done by user, use here for display it to search dropdown
 * @returns 
 */
const SearchSection = ({ setResultsList, setCityName, resultsList }) => {
    const location = useLocation();
    const path = location.pathname;

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    //use for state search and hospital search(on bookings page)
    const inputRef = useRef(null);  
    const inputRefCity = useRef(null);

    //use for city search
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isCityDropDownOpen, setIsCityDropDownOpen] = useState(false);

    const [statesList, setStatesList] = useState([]);
    const [citiesList, setCitiesList] = useState([]);

    // for input value and dropdown value
    const [stateData, setStateData] = useState({
        state: '',
        stateSelectedVal: ''
    });
    const [cityData, setCityData] = useState({
        city: '',
        citySelectedVal: ''
    });

    // for bookings search and dropdown
    const [hospName, setHospName] = useState('');
    const [hospSelectedVal, setHospSelectedVal] = useState('');
    // const [currFilterHospitals, setCurrFilterHospitals] = useState([]); //for showing results based on search


    useEffect(() => {
        async function fetchStates() {
            try {
                const url = "https://meddata-backend.onrender.com/states";
                const res = await fetch(url);
                const data = await res.json();
                setStatesList(data);
            } catch(e) {
                enqueueSnackbar("Failed to fetch: ", {
                    variant: "error"
                });
            }
        }
        fetchStates();

        document.addEventListener("click", toggleDropDown);
        document.addEventListener("click", toggleDropDownCity);
        return () => {
            document.removeEventListener("click", toggleDropDown);
            document.removeEventListener("click", toggleDropDownCity);
        }

    }, []);

    useEffect(() => {
        async function fetchCities() {
            try {
                const url = `https://meddata-backend.onrender.com/cities/${stateData.state}`;
                const res = await fetch(url);
                const data = await res.json();
                setCitiesList(data);
            } catch(e) {
                enqueueSnackbar("Failed to fetch cities: ", {
                    variant: "error"
                });
            }
        }
        if(stateData.stateSelectedVal !== "") {
            fetchCities();
        }
        
    }, [stateData]);

    // handling state search & hospital search(bookings page)
    function toggleDropDown(e) { 
        setIsDropDownOpen(e && e.target === inputRef.current);
    }

    // handling city search
    function toggleDropDownCity(e) { 
        setIsCityDropDownOpen(e && e.target === inputRefCity.current);
    }

    // console.log(statesList);

    const handleStateChange = (name, value) => {
        setCityData({
            city: '',
            citySelectedVal: ''
        });

        if(name === "stateSelectedVal") {
            setStateData({
                state: value,
                [name]: value
            });
        } else {
            setStateData({
                ...stateData,
                [name]: value
            });
        }
        
    };

    const handleCityChange = (name, value) => {
        if(name === "citySelectedVal") {
            setCityData({
                city: value,
                [name]: value
            });
        } else {
            setCityData({
                ...cityData,
                [name]: value
            });
        }
    };

    const handleHospChange = (e) => {
        setHospName(e.target.value);
    };

    const handleHospSelectChange = (hospName) => {
        setHospName(hospName);
        setHospSelectedVal(hospName);
        setIsDropDownOpen(false);
    };

    //handles search button of bookings page
    const handleHospitalSearch = () => {
        if(hospName === "" && hospSelectedVal === "") {
            enqueueSnackbar("Choose the Hospital", {
                variant: "warning"
            });
            return;
        }

        // filter booking list on basis of search inputs

        // const currentHosp = resultsList.filter((hosp) => { 
        //    return hosp.hospitalData["Hospital Name"].toLowerCase().includes(hospName.toLowerCase());
        // });
        // console.log('chan',currFilterHospitals, hospName)
        // setCurrFilterHospitals(currentHosp);
    }

    // handles search button/submit of state and city search
    const handleSearchSubmit = () => {
        if(stateData.state === "" && cityData.city === "") {
            enqueueSnackbar("Choose the State and city", {
                variant: "warning"
            });
            return;
        }

        if(stateData.state === "" || cityData.city === "") {
            const msgVal = stateData.state === "" ? "State" : "City";
            enqueueSnackbar(`Choose the ${msgVal}`, {
                variant: "warning"
            });
            return;
        }

        if(path === "/") {
            const locationData = {
                stateName: stateData.state,
                cityName: cityData.city
            };

            navigate("/searchresults", { state: locationData });    //key state is of useLocation()
        } else {
            
            setCityName(cityData.city);

            async function fetchData() {
                try {
                    const url = `https://meddata-backend.onrender.com/data?state=${stateData.state}&city=${cityData.city}`;
                    const res = await fetch(url);
                    const data = await res.json();
                    setResultsList(data);
                } catch(e) {
                    
                }
            }
            fetchData();
        }
    };

    // for the search bar of booking page
    if(path === '/bookings') {
        return (
            <div className={` ${styles.search_section_wrapper_bookings} 
                ${styles.search_section_postion_other_pages} 
                `}
            >
                <div className={styles.searchbars_button_wrapper}>
                    <div className={styles.searchbar_div}>
                        <input 
                            className={styles.searchbar}
                            type="text"
                            placeholder="Search By Hospital"
                            value={hospName}
                            ref={inputRef}
                            name="hospitalSearch"
                            onChange={handleHospChange}
                            onClick={toggleDropDown}
                        />
                        <div 
                            className={`${styles.drop_down_wrapper} ${
                                isDropDownOpen ? styles.drop_down_wrapper_open : ""
                            }`}
                        >
                            {
                                resultsList.map((hospital) => {
                                    const name = hospital.hospitalData["Hospital Name"];
                                    return (
                                        <div 
                                            className={`${styles.drop_down_option} ${
                                                name === hospSelectedVal ? styles.selected : '' 
                                            }`}
                                            key={hospital.hospitalData["Provider ID"]} 
                                            value={name}
                                            onClick={() => handleHospSelectChange(name)}
                                        >
                                            {name}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <Button
                        className={styles.button_mui}
                        variant="contained"
                        startIcon={<SearchIcon />}
                        sx={{
                            background: "var(--color-blue-secondary)",
                            textTransform: "none",
                        }}
                        onClick={handleHospitalSearch}
                    >
                        Search
                    </Button>
                </div>
            </div>
        );
    }

    // handling Home and Result page
    return (
        <div className={` ${styles.search_section_wrapper} 
            ${path === "/" ? styles.search_section_postion_home : styles.search_section_postion_other_pages} 
            `}
        >
            <div className={styles.searchbars_button_wrapper}>
                {/* state input and dropdown */}
                <div className={styles.searchbar_div}>
                    <SearchIcon />
                    <input 
                        className={styles.searchbar}
                        type="text"
                        placeholder="State"
                        value={stateData.state}
                        ref={inputRef}
                        name="state"
                        onChange={(e) => handleStateChange("state", e.target.value)}
                        onClick={toggleDropDown}
                    />
                    <div 
                        className={`${styles.drop_down_wrapper} ${
                            isDropDownOpen ? styles.drop_down_wrapper_open : ""
                        }`}
                    >
                        {
                            statesList.map((state) => {
                                return (
                                    <div 
                                        className={`${styles.drop_down_option} ${
                                            state === stateData.stateSelectedVal ? styles.selected : '' 
                                        }`}
                                        key={state} 
                                        value={state}
                                        name="stateSelectedVal"
                                        onClick={() => handleStateChange("stateSelectedVal", state)}
                                    >
                                        {state}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                {/* city input and dropdown */}
                <div className={styles.searchbar_div}>
                    <SearchIcon />
                    <input 
                        className={styles.searchbar}
                        type="text"
                        placeholder="City"
                        value={cityData.city}
                        ref={inputRefCity}
                        name="city"
                        onChange={(e) => handleCityChange("city", e.target.value)}
                        onClick={toggleDropDownCity}
                    />
                    <div 
                        className={`${styles.drop_down_wrapper} ${
                            isCityDropDownOpen ? styles.drop_down_wrapper_open : ""
                        }`}
                    >
                        {
                            citiesList.map((city) => {
                                return (
                                    <div 
                                        className={`${styles.drop_down_option} ${
                                            city === cityData.citySelectedVal ? styles.selected : '' 
                                        }`}
                                        key={city} 
                                        value={city}
                                        name="citySelectedVal"
                                        onClick={() => handleCityChange("citySelectedVal", city)}
                                    >
                                        {city}
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <Button
                    className={styles.button_mui}
                    variant="contained"
                    startIcon={<SearchIcon />}
                    sx={{
                        background: "var(--color-blue-secondary)",
                        textTransform: "none",
                    }}
                    onClick={handleSearchSubmit}
                >
                    Search
                </Button>
            </div>

            {/* for home page only */}
            {
                location.pathname === "/"
                    && 
                <div className={styles.cards_container}>
                    <div className={styles.heading}>You may be looking for</div>
                    <div className={styles.cards_wrapper}>
                        <Card Icon={Doctor} title="Doctors" />
                        <Card Icon={DrugStore} title="Labs" />
                        <Card Icon={Hospital} title="Hospitals" />
                        <Card Icon={Capsule} title="Medical Store" />
                        <Card Icon={Ambulance} title="Ambulance" />
                    </div>
                </div>
            }
        </div>
    );
};

export default SearchSection;
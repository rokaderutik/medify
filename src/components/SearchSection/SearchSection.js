import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { enqueueSnackbar, useSnackbar } from "notistack";
import SearchIcon from '@mui/icons-material/Search';
import styles from "./SearchSection.module.css";
import Ambulance from "../../assets/Ambulance.png"
import Capsule from "../../assets/Capsule.png";
import Doctor from "../../assets/Doctor.png";
import Hospital from "../../assets/Hospital.png";
import DrugStore from "../../assets/Drugstorelabs.png";

const Card = ({ Icon, title }) => {

    return (
        <div className={styles.card} onClick={() => {}}>
            <img src={Icon}  alt={title} />
            <h4>{title}</h4>
        </div>
    );
};

// resultsList contains bookings
const SearchSection = ({ setResultsList, setCityName, resultsList }) => {
    const location = useLocation();
    const path = location.pathname;

    const navigate = useNavigate();

    const [statesList, setStatesList] = useState([]);
    const [citiesList, setCitiesList] = useState([]);

    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    const { enqueueSnackbar } = useSnackbar();

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
    }, []);

    useEffect(() => {
        async function fetchCities() {
            try {
                const url = `https://meddata-backend.onrender.com/cities/${state}`;
                const res = await fetch(url);
                const data = await res.json();
                setCitiesList(data);
            } catch(e) {
                enqueueSnackbar("Failed to fetch cities: ", {
                    variant: "error"
                });
            }
        }
        if(state !== "") {
            fetchCities();
        }
        
    }, [state]);

    // console.log(state, citiesList);
    const handleStateChange = (e) => {
        setCity('');
        setState(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearchSubmit = () => {
        if(state === "" && city === "") {
            enqueueSnackbar("Choose the State and city", {
                variant: "warning"
            });
            return;
        }

        if(state === "" || city === "") {
            const msgVal = state === "" ? "State" : "City";
            enqueueSnackbar(`Choose the ${msgVal}`, {
                variant: "warning"
            });
            return;
        }

        if(path === "/") {
            const locationData = {
                stateName: state,
                cityName: city
            };

            navigate("/searchresults", { state: locationData });    //key state is of useLocation()
        } else {

            setCityName(city);

            async function fetchData() {
                try {
                    const url = `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`;
                    const res = await fetch(url);
                    const data = await res.json();
                    setResultsList(data);
                } catch(e) {
                    
                }
            }
            fetchData();
        }

    };

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
                        />
                        {/* changes start */}
                        <select 
                            className={styles.searchbar}
                            name="hospital"
                            value={""}
                            onChange={()=>{}}
                        >
                            <option></option>
                            {
                                resultsList.map((hospital) => {
                                    return (
                                        <option 
                                            key={hospital.hospitalData["Provider ID"]} 
                                            value={hospital.hospitalData["Hospital Name"]}
                                        >
                                            {hospital.hospitalData["Hospital Name"]}
                                        </option>
                                    );
                                })
                            }
                        </select>
                        {/* changes end */}
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
            </div>
        );
    }

    return (
        <div className={` ${styles.search_section_wrapper} 
            ${path === "/" ? styles.search_section_postion_home : styles.search_section_postion_other_pages} 
            `}
        >
            <div className={styles.searchbars_button_wrapper}>
                <div className={styles.searchbar_div}>
                    <SearchIcon />
                    <input 
                        className={styles.searchbar}
                        type="text"
                        placeholder="State"
                    />
                    {/* changes start */}
                    <select 
                        className={styles.searchbar}
                        name="state"
                        value={state}
                        onChange={handleStateChange}
                    >
                        <option></option>
                        {
                            statesList.map((state) => {
                                return (
                                    <option key={state} value={state}>{state}</option>
                                );
                            })
                        }
                    </select>
                    {/* changes end */}
                </div>
                <div className={styles.searchbar_div}>
                    <SearchIcon />
                    <input 
                        className={styles.searchbar}
                        type="text"
                        placeholder="City"
                    />
                    {/* changes start */}
                    <select 
                        className={styles.searchbar}
                        name="city"
                        value={city}
                        onChange={handleCityChange}
                    >
                        <option></option>
                        {
                            citiesList.map((city) => {
                                return (
                                    <option key={city} value={city}>{city}</option>
                                );
                            })
                        }
                    </select>
                    {/* changes end */}
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
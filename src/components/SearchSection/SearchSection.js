import { useLocation } from "react-router";
import { Button } from "@mui/material";
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

const SearchSection = () => {
    const location = useLocation();

    return (
        <div className={`${styles.search_section_wrapper} ${styles.search_section_postion_home}`}>
            <div className={styles.searchbars_button_wrapper}>
                <div className={styles.searchbar_div}>
                    <SearchIcon />
                    <input 
                        className={styles.searchbar}
                        type="text"
                        placeholder="State"
                    />
                </div>
                <div className={styles.searchbar_div}>
                    <SearchIcon />
                    <input 
                        className={styles.searchbar}
                        type="text"
                        placeholder="City"
                    />
                </div>
                <Button
                    className={styles.button_mui}
                    variant="contained"
                    startIcon={<SearchIcon />}
                    sx={{
                        background: "var(--color-blue-secondary)",
                        textTransform: "none",
                    }}
                >
                    Search
                </Button>
            </div>
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
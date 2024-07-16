import { useState } from "react";
import styles from "./DownloadAppSection.module.css";
import { Button } from "@mui/material";
import { ReactComponent as DownloadArrow } from "../../assets/download_arrow.svg";
import { ReactComponent as GoogleStore } from "../../assets/google_play.svg";
import { ReactComponent as AppleStore } from "../../assets/apple_store.svg";
import { ReactComponent as MobileBody } from "../../assets/mobile_body.svg";
import { ReactComponent as MobileContent } from "../../assets/mobile_inside.svg";


/**
 * DownloadAppSection component
 * @returns 
 */
export default function DownloadAppSection() {
    const [inputData, setInputData] = useState('');

    return (
        <div className={styles.section_wrapper}>
            <div className={styles.images_section}>
                <div className={styles.mobile_below}>
                {/* as mobile is not full image its content is seprate and body is seprate image so place it accordingly */}
                    <div className={styles.mobile_content}>
                        <MobileContent />
                        <div className={styles.mobile_body}>
                            <MobileBody />
                        </div>
                    </div>
                </div>
                <div className={styles.mobile_above}>
                    <div className={styles.mobile_content}>
                        <MobileContent />
                        <div className={styles.mobile_body}>
                            <MobileBody />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.text_section}>
                <h1 className={styles.heading}>Download the<br/><span>Medify</span> App</h1>
                <p className={styles.para}>Get the link to download the app</p>
                <div className={styles.input_button_wrapper}>
                    <div className={styles.input_wrapper}>
                        <div className={styles.input_first}>+91</div>
                        <input 
                            type="number"
                            placeholder="Enter phone number"
                            value={inputData}
                            onChange={(e) => { setInputData(e.target.value)}}
                        />
                    </div>
                    <Button
                        className={styles.button_mui}
                        variant="contained"
                        sx={{
                            background: "var(--color-blue-secondary)",
                            textTransform: "none",
                            padding: "6px"
                        }}
                        onClick={() => setInputData('')}
                    >
                        Send SMS
                    </Button>
                </div>
                <div className={styles.appstore_btn_wrapper}>
                    <GoogleStore />
                    <AppleStore />
                </div>
                <div className={styles.arrow}>
                    <DownloadArrow />
                </div>
            </div>
        </div>
    );
}
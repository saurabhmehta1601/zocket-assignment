import React from 'react'
import styles from "./styles.module.scss"
import facebookLogo from "../../../assets/logos/facebook.svg"
import youtubeLogo from "../../../assets/logos/youtube.svg"
import googleLogo from "../../../assets/logos/google.svg"
import editLogo from "../../../assets/icons/outlined/edit.svg"
import deleteLogo from "../../../assets/icons/outlined/delete.svg"
import plusLogo from "../../../assets/icons/outlined/plus.png"
import minusLogo from "../../../assets/icons/outlined/minus.png"
import ReactSwitch from "react-switch"

interface IProps {
    campaign: {
        isOn: boolean,
        name: string,
        dateRange: string,
        clicks: number,
        budget: string,
        location: string,
        platform: "Google" | "Facebook" | "Youtube",
        status: "Live now" | "Paused" | "Exhausted"
        imageSrc: string
        createdOn: string
    }
}
const getPlatformLogo = (platform: "Youtube" | "Google" | "Facebook") => {
    if (platform === "Youtube") return youtubeLogo
    if (platform === "Google") return googleLogo
    if (platform === "Facebook") return facebookLogo
}

interface IStatusProps {
    status: "Live now" | "Paused" | "Exhausted"
}
const CampaignStatus = ({ status }: IStatusProps) => {
    if (status === "Live now") {
        return (<div className={styles.liveNow}>
            Live now
        </div>)
    }

    if (status === "Paused") {
        return (<div className={styles.paused}>
            Paused
        </div>)
    }

    return (<div className={styles.exhausted}>
        Exhausted
    </div>)
}

const CampaignGridRow = ({ campaign }: IProps) => {
    const [checked, setChecked] = React.useState(campaign.isOn)
    return (
        <div className={styles.row}>
            <div className={styles.selectRow}> <input type="checkbox" /> </div>
            <div className={styles.isOn}>
                <ReactSwitch
                    width={42}
                    height={20}
                    className={styles.switch}
                    onColor="#0F6EFF"
                    offColor='#DADEE3'
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    handleDiameter={20}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    checkedIcon={false}
                    uncheckedIcon={false}
                    uncheckedHandleIcon={<img className={styles.offSwitchImg} src={minusLogo} alt="minus" />}
                    checkedHandleIcon={<img className={styles.onSwitchImg} src={plusLogo} alt="plus" />}
                />

            </div>
            <div className={styles.campaign}>
                <img src={campaign.imageSrc} alt="campaign" />
                <div className={styles.flexVertical}>
                    <div className={styles.name}> {campaign.name} </div>
                    <div className={styles.createdOn}> Created on {campaign.createdOn} </div>
                </div>
            </div>
            <div>{campaign.dateRange}</div>
            <div className={styles.clicks}>{campaign.clicks}</div>
            <div>{campaign.budget}</div>
            <div>{campaign.location}</div>
            <div className={styles.platform}>
                <img src={getPlatformLogo(campaign.platform)} alt={campaign.platform} />
            </div>
            <div>
                <CampaignStatus status={campaign.status} />
            </div>
            <div className={styles.action}>
                <img src={editLogo} alt="edit" />
                <img src={deleteLogo} alt="delete" />
            </div>
        </div>
    )
}

export default CampaignGridRow
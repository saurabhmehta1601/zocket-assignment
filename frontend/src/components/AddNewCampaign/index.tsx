import React from 'react'
import styles from "./styles.module.scss"
import AddCircleIcon from "../../assets/icons/outlined/add-circle.svg"
import CampaignList from './CampaignList'

const AddNewCampaign = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.h3}>Your Campaigns</h3>
            <div className={styles.flexBetween}>
                <p className={styles.p}> Check the list of campaigns you have created</p>
                <div className={styles.addCampaignBtn}> <img src={AddCircleIcon} alt="" />  Create new campaign</div>
            </div>
            <CampaignList />
        </div>
    )
}

export default AddNewCampaign  
import React, { useState } from 'react'
import styles from "../styles/allCampaigns.module.scss"
import AddCircleIcon from "../assets/icons/outlined/add-circle.svg"
import CampaignsGrid from '../components/CampaignsGrid'
import { Link } from 'react-router-dom'

const AllCampaignsPage = () => {
    return (
        <div className={styles.container} >
            <div className={styles.flexBetween}>
                <div >
                    <p className={styles.h3}>Your Campaigns</p>
                    <p className={styles.p}> Check the list of campaigns you have created</p>
                </div>
                <Link to="/campaign/create">
                    <button className={styles.addCampaignBtn}> <img src={AddCircleIcon} alt="plus" />  Create new campaign
                    </button>
                </Link>

            </div>
            <CampaignsGrid />
        </div>
    )
}

export default AllCampaignsPage
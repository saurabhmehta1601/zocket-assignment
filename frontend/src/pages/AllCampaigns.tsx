import React, { useState } from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import styles from "../styles/allCampaigns.module.scss"
import AddCircleIcon from "../assets/icons/outlined/add-circle.svg"
import CampaignsGrid from '../components/CampaignsGrid'

const AllCampaignsPage = () => {
    return (
        <DashboardLayout>
            <div className={styles.container} >
                <div className={styles.flexBetween}>
                    <div >
                        <p className={styles.h3}>Your Campaigns</p>
                        <p className={styles.p}> Check the list of campaigns you have created</p>
                    </div>
                    <div className={styles.addCampaignBtn}> <img src={AddCircleIcon} alt="" />  Create new campaign
                    </div>

                </div>
                <CampaignsGrid />
            </div>
        </DashboardLayout>
    )
}

export default AllCampaignsPage
import React, { useState } from 'react'
import styles from "../styles/dashboard.module.scss"
import DashboardMenu from '../components/DashboardMenu'
import Header from '../components/Header'
import AddNewCampaign from '../components/AddNewCampaign'

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <DashboardMenu />
            <div className={styles.main}>
                <Header />
                <AddNewCampaign />
            </div>
        </div>
    )
}

export default Dashboard
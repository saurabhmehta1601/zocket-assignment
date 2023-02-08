import React, { useState } from 'react'
import styles from "../styles/dashboard.module.scss"
import DashboardMenu from '../components/DashboardMenu'

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <DashboardMenu />
            <div className={styles.main}></div>
        </div>
    )
}

export default Dashboard
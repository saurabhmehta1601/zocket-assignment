import React from 'react'
import styles from "./dashboardLayout.module.scss"
import DashboardMenu from '../components/DashboardMenu'
import Header from '../components/Header'

interface IProps {
    children: React.ReactNode
}
const DashboardLayout = ({ children }: IProps) => {
    console.log("dashboardLayout rendered ")
    return (
        <div className={styles.container}>
            <DashboardMenu />
            <div className={styles.main}>
                <Header />
                <div className={styles.mainContent}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout 
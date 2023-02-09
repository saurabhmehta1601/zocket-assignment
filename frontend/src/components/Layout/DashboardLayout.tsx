import React from 'react'
import styles from "./dashboardLayout.module.scss"
import DashboardMenu from '../DashboardMenu'
import Header from '../Header'

interface IProps {
    children: React.ReactNode
}
const DashboardLayout = ({ children }: IProps) => {
    return (
        <div className={styles.container}>
            <DashboardMenu />
            <div className={styles.main}>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout 
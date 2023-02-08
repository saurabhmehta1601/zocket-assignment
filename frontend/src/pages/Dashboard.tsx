import React, { useState } from 'react'
import styles from "../styles/dashboard.module.scss"
import zocketLogo from "../assets/zocket-logo.svg"
import homeIcon from "../assets/icons/home.svg"
import campaignIcon from "../assets/icons/campaign.svg"
import customersIcon from "../assets/icons/customers.svg"
import productsIcon from "../assets/icons/products.svg"

enum MenuItemLabel {
    HOME = "Home", CAMPAIGN = "Campaign", PRODUCTS = "Products", CUSTOMERS = "Customers"
}


interface IMenuItem {
    isActiveMenuItem: boolean,
    label: string
    iconSrc: string,
    onClick: () => void
}
const MenuItem = ({ isActiveMenuItem, label, iconSrc, onClick }: IMenuItem) => (
    <div className={[styles.menuItem, isActiveMenuItem ? styles.activeMenuItem : ""].join(" ")} onClick={onClick}>
        <img src={iconSrc} alt={label} className={styles.menuIcon} />
        <p className={styles.label}>{label}</p>
    </div>
)

const Dashboard = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState(MenuItemLabel.HOME)
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <img src={zocketLogo} alt="zocket logo" className={styles.zocketLogo} />
                <MenuItem
                    iconSrc={homeIcon}
                    label={MenuItemLabel.HOME}
                    onClick={() => setSelectedMenuItem(MenuItemLabel.HOME)}
                    isActiveMenuItem={selectedMenuItem === MenuItemLabel.HOME}
                />
                <MenuItem
                    iconSrc={campaignIcon}
                    label={MenuItemLabel.CAMPAIGN}
                    onClick={() => setSelectedMenuItem(MenuItemLabel.CAMPAIGN)}
                    isActiveMenuItem={selectedMenuItem === MenuItemLabel.CAMPAIGN}
                />
                <MenuItem
                    iconSrc={productsIcon}
                    label={MenuItemLabel.PRODUCTS}
                    onClick={() => setSelectedMenuItem(MenuItemLabel.PRODUCTS)}
                    isActiveMenuItem={selectedMenuItem === MenuItemLabel.PRODUCTS}
                />
                <MenuItem
                    iconSrc={customersIcon}
                    label={MenuItemLabel.CUSTOMERS}
                    onClick={() => setSelectedMenuItem(MenuItemLabel.CUSTOMERS)}
                    isActiveMenuItem={selectedMenuItem === MenuItemLabel.CUSTOMERS}
                />
            </div>
            <div className={styles.main}></div>
        </div>
    )
}

export default Dashboard
import React, { useState } from 'react'
import styles from "./styles.module.scss"
import zocketLogo from "../../assets/zocket-logo.svg"
import homeIconOutlined from "../../assets/icons/outlined/home.svg"
import campaignIconOutlined from "../../assets/icons/outlined/campaign.svg"
import customersIconOutlined from "../../assets/icons/outlined/customers.svg"
import productsIconOutlined from "../../assets/icons/outlined/products.svg"
import homeIconSolid from "../../assets/icons/solid/home.svg"
import campaignIconSolid from "../../assets/icons/solid/campaign.svg"
import customersIconSolid from "../../assets/icons/solid/customers.svg"
import productsIconSolid from "../../assets/icons/solid/products.svg"

enum MenuItemLabel {
    HOME = "Home", CAMPAIGN = "Campaign", PRODUCTS = "Products", CUSTOMERS = "Customers"
}


interface IMenuItem {
    isActiveMenuItem: boolean,
    label: string
    iconSrc: string,
    activeIconSrc: string
    onClick: () => void
}

const MenuItem = ({ isActiveMenuItem, label, iconSrc, onClick, activeIconSrc }: IMenuItem) => (
    <div className={[styles.menuItem, isActiveMenuItem ? styles.activeMenuItem : ""].join(" ")} onClick={onClick}>
        <img src={isActiveMenuItem ? activeIconSrc : iconSrc} alt={label} className={styles.menuIcon} />
        <p className={styles.label}>{label}</p>
    </div>
)


const DashboardMenu = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState(MenuItemLabel.HOME)
    return (
        <div className={styles.menu}>
            <img src={zocketLogo} alt="zocket logo" className={styles.zocketLogo} />
            <MenuItem
                iconSrc={homeIconOutlined}
                activeIconSrc={homeIconSolid}
                label={MenuItemLabel.HOME}
                onClick={() => setSelectedMenuItem(MenuItemLabel.HOME)}
                isActiveMenuItem={selectedMenuItem === MenuItemLabel.HOME}
            />
            <MenuItem
                iconSrc={campaignIconOutlined}
                activeIconSrc={campaignIconSolid}
                label={MenuItemLabel.CAMPAIGN}
                onClick={() => setSelectedMenuItem(MenuItemLabel.CAMPAIGN)}
                isActiveMenuItem={selectedMenuItem === MenuItemLabel.CAMPAIGN}
            />
            <MenuItem
                iconSrc={productsIconOutlined}
                activeIconSrc={productsIconSolid}
                label={MenuItemLabel.PRODUCTS}
                onClick={() => setSelectedMenuItem(MenuItemLabel.PRODUCTS)}
                isActiveMenuItem={selectedMenuItem === MenuItemLabel.PRODUCTS}
            />
            <MenuItem
                iconSrc={customersIconOutlined}
                activeIconSrc={customersIconSolid}
                label={MenuItemLabel.CUSTOMERS}
                onClick={() => setSelectedMenuItem(MenuItemLabel.CUSTOMERS)}
                isActiveMenuItem={selectedMenuItem === MenuItemLabel.CUSTOMERS}
            />
        </div>
    )
}

export default DashboardMenu 
import React, { useState } from 'react'
import styles from "./styles.module.scss"
import zocketLogo from "../../assets/logos/zocket.svg"
import homeIconOutlined from "../../assets/icons/outlined/home.svg"
import campaignIconOutlined from "../../assets/icons/outlined/campaign.svg"
import customersIconOutlined from "../../assets/icons/outlined/customers.svg"
import productsIconOutlined from "../../assets/icons/outlined/products.svg"
import homeIconSolid from "../../assets/icons/solid/home.svg"
import campaignIconSolid from "../../assets/icons/solid/campaign.svg"
import customersIconSolid from "../../assets/icons/solid/customers.svg"
import productsIconSolid from "../../assets/icons/solid/products.svg"
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setDashboardActiveMenuItem } from '../../redux/features/dashboardSlice'

enum MenuItemLabel {
    HOME = "Home",
    CAMPAIGNS = "Campaigns",
    CUSTOMERS = "Customers",
    PRODUCTS = "Products"
}

interface IMenuItem {
    isActiveMenuItem: boolean,
    label: string
    iconSrc: string,
    activeIconSrc: string
    onClick: () => void
}

const MenuItem = ({ isActiveMenuItem, label, iconSrc, onClick, activeIconSrc }: IMenuItem) => (
    <div
        className={[styles.menuItem, isActiveMenuItem ? styles.activeMenuItem : ""].join(" ")}
        onClick={onClick}>
        <img src={isActiveMenuItem ? activeIconSrc : iconSrc} alt={label} className={styles.menuIcon} />
        <p className={styles.label}>{label}</p>
    </div>
)


const DashboardMenu = () => {
    const dispatch = useAppDispatch()
    const selectedMenuItem = useAppSelector(state => state.dashboard.activeDashboardMenuItem)
    return (
        <div className={styles.menu}>
            <img src={zocketLogo} alt="zocket logo" className={styles.zocketLogo} />
            <Link to="/" >
                <MenuItem
                    onClick={() => {
                        dispatch(setDashboardActiveMenuItem(MenuItemLabel.HOME))
                    }}
                    iconSrc={homeIconOutlined}
                    activeIconSrc={homeIconSolid}
                    label={MenuItemLabel.HOME}
                    isActiveMenuItem={selectedMenuItem === MenuItemLabel.HOME}
                />
            </Link>
            <Link to="/campaign" >
                <MenuItem
                    iconSrc={campaignIconOutlined}
                    activeIconSrc={campaignIconSolid}
                    label={MenuItemLabel.CAMPAIGNS}
                    onClick={() => {
                        dispatch(setDashboardActiveMenuItem(MenuItemLabel.CAMPAIGNS))
                    }}
                    isActiveMenuItem={selectedMenuItem === MenuItemLabel.CAMPAIGNS}
                />
            </Link>
            <Link to="/products">
                <MenuItem
                    iconSrc={productsIconOutlined}
                    activeIconSrc={productsIconSolid}
                    label={MenuItemLabel.PRODUCTS}
                    onClick={() => {
                        dispatch(setDashboardActiveMenuItem(MenuItemLabel.PRODUCTS))
                    }}
                    isActiveMenuItem={selectedMenuItem === MenuItemLabel.PRODUCTS}
                />
            </Link>
            <Link to={"/customers"}>
                <MenuItem
                    iconSrc={customersIconOutlined}
                    activeIconSrc={customersIconSolid}
                    label={MenuItemLabel.CUSTOMERS}
                    onClick={() => {
                        dispatch(setDashboardActiveMenuItem(MenuItemLabel.CUSTOMERS))
                    }}
                    isActiveMenuItem={selectedMenuItem === MenuItemLabel.CUSTOMERS}
                />
            </Link>
        </div>
    )
}

export default DashboardMenu 
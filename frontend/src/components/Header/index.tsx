import React from 'react'
import styles from "./styles.module.scss"
import crownImg from "../../assets/icons/solid/crown.svg"
import giftBucketLogo from "../../assets/icons/outlined/giftbucket.svg"
import notificationBellLogo from "../../assets/icons/outlined/notification-bell.svg"
import userProfilePictureCake from "../../assets/images/user-profile-picture-cake.png"
import languagesIcon from "../../assets/icons/outlined/languages.svg"

const Header = () => {
    return (
        <div className={styles.container}>
            <p className={styles.freeTrialWarning}>Free trial ends in 2 days</p>
            <button className={styles.buyPlan}>
                <img src={crownImg} alt="" />
                Buy Plan
            </button>
            <div className={styles.icon}>
                <img src={giftBucketLogo} alt="" />
            </div>
            <div className={styles.icon}>
                <img src={notificationBellLogo} alt="" />
            </div>
            <div className={styles.profilePicture}>
                <img src={userProfilePictureCake} alt="" />
            </div>
            <p className={styles.username}>Mukund Cake Shop</p>
            <span className={styles.dropdown}></span>

            <div className={styles.icon}>
                <img src={languagesIcon} alt="" />
            </div>
        </div>
    )
}

export default Header
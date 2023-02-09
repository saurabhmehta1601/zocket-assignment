import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
import styles from "../styles/createNewCampaign.module.scss"
import MultiStepForm from '../components/MultiStepForm'

const CreateNewCampaign = () => {
    return (
        <div>
            <p className={styles.h3}>Your Ad campaign</p>
            <p className={styles.p}>Launch your ad in just 4 easy steps</p>
            <MultiStepForm activeStep={1} />
        </div>
    )
}

export default CreateNewCampaign
import React from 'react'
import styles from "./styles.module.scss"
import Step1 from './Step1'
import { useAppSelector } from '../../hooks/redux'
import Step2 from './Step2'
import Step3 from './Step3'

const MultiStepForm = () => {
    const activeStep = useAppSelector(state => state.createCampaign.activeStep)
    return (
        <div className={styles.container}>
            <div className={styles.multilineAction}>
                <div
                    className={[styles.step, activeStep === 1 ? styles.activeStep : ""].join(" ")}
                >
                    <div className={styles.bulbIcon}></div>
                </div>
                <div className={styles.separator}></div>
                <div
                    className={[styles.step, activeStep === 2 ? styles.activeStep : ""].join(" ")}
                >
                    <div className={styles.productsIcon}></div>
                </div>
                <div className={styles.separator}></div>
                <div
                    className={[styles.step, activeStep === 3 ? styles.activeStep : ""].join(" ")}
                >
                    <div className={styles.appointmentsIcon}></div>
                </div>
                <div className={styles.separator}></div>
                <div
                    className={[styles.step, activeStep === 4 ? styles.activeStep : ""].join(" ")}
                >
                    <div className={styles.tickIcon}></div>
                </div>

            </div>
            {activeStep === 1 && (<Step1 />)}
            {activeStep === 2 && (<Step2 />)}
            {activeStep === 3 && (<Step3 />)}
        </div>
    )
}

export default MultiStepForm
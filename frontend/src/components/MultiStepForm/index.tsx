import React from 'react'
import styles from "./styles.module.scss"
import tickIcon from "../../assets/icons/solid/tick.png"
import appointmentsIcon from "../../assets/icons/solid/appointments.png"
import bagIcon from "../../assets/icons/solid/products.svg"

interface IProps {
    activeStep: number
}

const MultiStepForm = ({ activeStep }: IProps) => {
    return (
        <div className={styles.container}>
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
    )
}

export default MultiStepForm
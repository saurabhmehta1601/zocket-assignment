import React, { useState } from 'react'
import styles from "./styles.module.scss"

interface IProps {
    button1Text: string
    button2Text: string
    initialSelectedButton?: number
}
const ButtonSwitch = ({ button1Text, button2Text, initialSelectedButton }: IProps) => {
    const [selectedButton, setSelectedButton] = useState(initialSelectedButton ? initialSelectedButton : 1)
    return (
        <div className={styles.buttonGroup}>
            <button
                className={selectedButton === 1 ? styles.selectedButton : ""}
                onClick={() => setSelectedButton(1)}
            >
                {button1Text}
            </button>
            <button
                className={selectedButton === 2 ? styles.selectedButton : ""}
                onClick={() => setSelectedButton(2)}
            >
                {button2Text}
            </button>
        </div>
    )
}

export default ButtonSwitch
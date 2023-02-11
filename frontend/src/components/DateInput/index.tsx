import React from 'react'
import calendarIcon from "../../assets/icons/solid/calendar.svg"
import styles from "./styles.module.scss"

interface IProps {
    label: string
}
const DateInput = ({ label }: IProps) => {
    return (
        <div className={styles.container}>
            <div className='tinyText'>{label}</div>
            <div className="flex p-3 lightGrayBorder rounded-xl">
                <input type="text" className='flex-1 bg-transparent outline-none' />
                <img src={calendarIcon} alt="" />
            </div>
        </div >
    )
}

export default DateInput 
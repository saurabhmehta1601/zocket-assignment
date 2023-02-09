import React from 'react'
import styles from "./styles.module.scss"

interface IProps {
    children: React.ReactNode
}
const Card = ({ children }: IProps) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}

export default Card
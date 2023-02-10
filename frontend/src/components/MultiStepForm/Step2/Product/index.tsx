import React from 'react'
import styles from "./styles.module.scss"

interface IProps {
    onClick: () => void,
    isSelected: boolean,
    product: {
        name: string,
        price: string,
        image: string
    }
}

const Product = ({ product, isSelected, onClick }: IProps) => {
    return (
        <div
            className={[styles.container, isSelected ? styles.selected : ""].join(" ")}
            onClick={onClick}>
            <div className={styles.image}>
                <img src={product.image} alt={product.name} />
            </div>
            <div className="flex-1">
                <div className='text-sm font-semibold'>{product.name}</div>
                <div className={['secondaryText', styles.price].join(" ")}>{product.price}</div>
            </div>
            <div className={styles.tickIcon}></div> 
        </div>
    )
}

export default Product
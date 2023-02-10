import React from 'react'
import { products } from '../../../constants/products'
import { useAppDispatch } from '../../../hooks/redux'
import { setActiveStep } from '../../../redux/features/createCampaignSlice'
import Card from '../../Card'
import Product from './Product'
import styles from "./styles.module.scss"

const Step2 = () => {
    const dispatch = useAppDispatch()
    const [selectedProduct, setSelectedProduct] = React.useState<typeof products[number] | null>(null)

    return (
        <Card>
            <div className={"h5"}>Choose the product
                <span className='secondaryText'>(Step 2 of 4)</span>
            </div>
            <div className="hr"></div>
            <div className={styles.productsGrid}>
                {products.map(product => (
                    <Product
                        key={product.name}
                        product={product}
                        isSelected={selectedProduct?.name === product.name}
                        onClick={() => setSelectedProduct(product)}
                    />
                ))}
            </div>
            <div className="flex justify-end mt-2">
                <button
                    className={"primaryButton"}
                    onClick={() => dispatch(setActiveStep(3))}
                >
                    Continue
                </button>

            </div>

        </Card>
    )
}

export default Step2
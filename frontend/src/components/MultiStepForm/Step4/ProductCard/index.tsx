import React from 'react'
import styles from "./styles.module.scss"
import tickCircleBlue from "../../../../assets/icons/solid/tick-circle-blue.svg"

interface IProps {
    isSelected: boolean,
    onClick: () => void,
    campaign: {
        id: number,
        name: string,
        ownerImg: string,
        sponsered: boolean,
        text: string,
        posterImg: string,
    }
}
const ProductCard = ({ isSelected, onClick, campaign: { name, sponsered, ownerImg, text, posterImg } }: IProps) => {
    return (
        <div
            className={['lightGrayBorder rounded-xl p-4 relative font-gilroy', isSelected ? styles.selected : ""].join(" ")}
            onClick={onClick}>
            {isSelected && <img src={tickCircleBlue} className='h-6 w-6 absolute -right-3 -top-2' alt="" />}
            <div className='flex gap-x-2'>
                <div className='h-12 w-12'><img src={ownerImg} alt={name} /></div>
                <div>
                    <div className='text-[#2B23A5]  font-semibold text-[16px]'>{name}</div>
                    {sponsered ? <div className='tinyText '>sponsered</div> : null}
                </div>
            </div>
            <div className='text-sm text-[14px]'> {text} </div>
            <div>
                <img src={posterImg} alt="campaign poster" className='mt-2' />
                <div className='bg-[#F5F5F5]'>
                    <div className='text-[#2B23A5] text-[14px] font-semibold px-4 py-2'>{name}</div>
                </div>
                {isSelected && <div className="flex justify-between mt-2">
                    <div
                        className={styles.button}>
                        Change image
                    </div>
                    <div
                        className={styles.button}>
                        Edit text
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default ProductCard 
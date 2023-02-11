import React, { useState } from 'react'

interface IProps {
    min: number
    max: number
    label: string
}
const RangeSlider = ({ min, max, label }: IProps) => {
    return (
        <div className='my-4'>
            <div className='tinyText mb-1'>{label}</div>
            <input type="range"
                min={min}
                max={max}
                className=" w-full cursor-pointer"
            />
            <div className='flex justify-between mb-5'>
                <span className='secondaryText'>{min}</span>
                <span className='secondaryText'>{max}</span>
            </div>
        </div>
    )
}

export default RangeSlider 
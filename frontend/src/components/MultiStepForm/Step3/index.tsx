import React, { useState } from 'react'
import ButtonSwitch from '../../ButtonSwitch'
import Card from '../../Card'
import DateInput from '../../DateInput'
import styles from "./styles.module.scss"
import gpsIcon from "../../../assets/icons/outlined/gps.svg"
import RangeSlider from './RangeSlider'
import { useAppDispatch } from '../../../hooks/redux'
import { setActiveStep } from '../../../redux/features/createCampaignSlice'

const Step3 = () => {
    const dispatch = useAppDispatch()
    return (
        <div className='flex'>
            <div className='w-3/5'>
                <Card>
                    <div className="h5">
                        Campaign Settings
                        <span className='secondaryText'> (Step 3 of 4)</span>
                    </div>
                    <div className='hr'></div>

                    <div className='flex items-center gap-x-3'>
                        <div className={styles.numberIcon}>1</div>
                        <div className='underline'>Budget and dates info</div>
                    </div>
                    <div className='flex mt-4 '>
                        <div className={styles.verticalLine} ></div>
                        <div className=' flex-1'>
                            <div className='tinyText mb-3'>Budget Timeline</div>
                            <div className='mb-5 w-fit'>
                                <ButtonSwitch button1Text='Lifetime' button2Text='Daily' />
                            </div>
                            <div className='grid grid-cols-2 w-full gap-x-4'>
                                <DateInput label='Start date' />
                                <DateInput label='End date' />
                            </div>
                            <RangeSlider label="Enter campaign budget" min={100} max={100000} />
                        </div>
                    </div>
                    <div className='flex items-center gap-x-3 mt-2'>
                        <div className={styles.numberIcon}>2</div>
                        <div className='underline'>Location Info</div>
                    </div>
                    <div className='ml-8'>
                        <div className='mb-5 w-fit  mt-4'>
                            <div className='tinyText mb-3'>Location type</div>
                            <ButtonSwitch button1Text='Location' button2Text='Radius' initialSelectedButton={2} />
                        </div>
                        <div className='mb-5  mt-4'>
                            <div className='tinyText mb-3'>Select Location</div>
                            <div className="flex p-3 lightGrayBorder rounded-xl ">
                                <input type="text"
                                    className='flex-1 bg-transparent outline-none'
                                    placeholder='Select a place name, address or coordinates'
                                />
                                <img src={gpsIcon} alt="location" />
                            </div>
                        </div>
                        <div>
                            <RangeSlider label='Select target radius' min={1} max={30} />
                        </div>
                    </div>
                </Card >

            </div >
            <div className='flex-1'>
                <div className=' h-full flex flex-col justify-end items-center pb-6'>
                    <button
                        onClick={() => dispatch(setActiveStep(4))}
                        className='primaryButton'
                    > Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Step3
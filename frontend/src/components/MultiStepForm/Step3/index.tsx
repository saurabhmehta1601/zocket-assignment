import React, { useState } from 'react'
import ButtonSwitch from '../../ButtonSwitch'
import Card from '../../Card'
import DateInput from '../../DateInput'
import styles from "./styles.module.scss"


const Step3 = () => {
    return (
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

                    </div>
                </div>
            </Card >

        </div >
    )
}

export default Step3
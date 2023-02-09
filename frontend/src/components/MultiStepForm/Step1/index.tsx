import React from 'react'
import { actions } from '../../../constants/actions'
import Card from '../../Card'
import styles from "./styles.module.scss"

const Step1 = () => {
    return (<>
        <Card>
            <div className={styles.h5}> What you want to do ?
                <span className={styles.secondaryText}>(Step 1 of 4)</span>
            </div>
            <div className={styles.hr}></div>

            <div className={styles.actionGrid}>
                {actions.map(action => (
                    <div key={action.primaryText} className={styles.actionItem}>
                        <div>
                            <img src={action.actionIcon} alt={action.primaryText} />
                        </div>
                        <div>
                            <div className={styles.primaryText} >
                                {action.primaryText}
                            </div>
                            <div className={styles.secondaryText}>
                                {action.secondaryText}
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </Card>
        <div className='flex justify-end'>
            <button className={styles.primaryButton}> Continue </button>
        </div>
    </>)
}

export default Step1
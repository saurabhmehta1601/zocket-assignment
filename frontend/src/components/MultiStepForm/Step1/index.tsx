import React from 'react'
import { actions } from '../../../constants/actions'
import { useAppDispatch } from '../../../hooks/redux'
import { setActiveStep } from '../../../redux/features/createCampaignSlice'
import Card from '../../Card'
import styles from "./styles.module.scss"
import tickCircleBlue from "../../../assets/icons/solid/tick-circle-blue.svg"

const Step1 = () => {
    const [selectedAction, setSelectedAction] = React.useState<typeof actions[number] | null>(null)
    const dispatch = useAppDispatch()
    return (<>
        <Card>
            <div className="h5"> What you want to do ?
                <span className="secondaryText">(Step 1 of 4)</span>
            </div>
            <div className="hr"></div>

            <div className={styles.actionGrid}>
                {actions.map(action => (
                    <div
                        key={action.primaryText}
                        className={[styles.actionItem, selectedAction?.primaryText === action.primaryText ? styles.activeAction : ""].join(" ")}
                        onClick={() => { setSelectedAction(action) }}
                    >
                        <div> <img src={action.actionIcon} alt={action.primaryText} /> </div>
                        <div>
                            <div className={styles.primaryText} > {action.primaryText} </div>
                            <div className={["secondaryText", styles.smallText].join(" ")}>
                                {action.secondaryText}
                            </div>
                        </div>
                        {selectedAction?.primaryText === action.primaryText && <div className={styles.checkIcon} >
                            <img src={tickCircleBlue} alt="select action" />
                        </div>}
                    </div>
                ))
                }
            </div>
        </Card>
        <div className='flex justify-end'>
            <button
                className={"primaryButton"}
                onClick={() => dispatch(setActiveStep(2))}
            >
                Continue
            </button>
        </div>
    </>)
}

export default Step1
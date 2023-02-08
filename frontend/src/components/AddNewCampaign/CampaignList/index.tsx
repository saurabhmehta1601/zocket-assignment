import React from 'react'
import styles from "./styles.module.scss"
import SearchIcon from "../../../assets/icons/outlined/search.svg"

const CampaignList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.flexBetween}>
                <div className={styles.search}>
                    <img src={SearchIcon} alt="search" />
                    <input type="text" placeholder="Search for the campaign" />
                </div>
                <div className={styles.filters}>
                    <div className={styles.filter}>
                        <label htmlFor="platforms" className={styles.label}>Platform : </label>
                        <div className={styles.selectContainer}>
                            <select name="platforms" id="platforms">
                                <option value="All Platform">All Platform</option>
                                <option value="">Facebook</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.filter}>
                        <label htmlFor="status" className={styles.label}>Status: </label>
                        <div className={styles.selectContainer}>
                            <select name="status" id="status">
                                <option value="All Status">All Status</option>
                                <option value="Paused">Running</option>
                                <option value="Paused">Paused</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.filter}>
                        <div className={styles.selectContainer}>
                            <select name="duration" id="status">
                                <option value="monthly">Last 30 days</option>
                                <option value="yearly">Last year</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {/* Campign Table*/}
            {/* <table className={styles.table}>
                <tr >
                    <th> <input type="checkbox" /> </th>
                    <th>On/Off</th>
                    <th>Campaign</th>
                    <th>Date Range</th>
                    <th>Clicks</th>
                    <th>Budget</th>
                    <th>Location</th>
                    <th>Platform</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </table> */}
            <div className={styles.table}>
                <div className={styles.row}>
                    <div className={styles.th}> <input type="checkbox" /> </div>
                    <div className={styles.th}>On/Off</div>
                    <div className={styles.th}>Campaign</div>
                    <div className={styles.th}>Date Range</div>
                    <div className={styles.th}>Clicks</div>
                    <div className={styles.th}>Budget</div>
                    <div className={styles.th}>Location</div>
                    <div className={styles.th}>Platform</div>
                    <div className={styles.th}>Status</div>
                    <div className={styles.th}>Action</div>
                </div>

                {/* ROW 1 */}
                <div className={styles.row}>
                    <div > <input type="checkbox" checked /> </div>
                    <div >On</div>
                    <div >Facebook Rockstar theme game </div>
                    <div >Date Range</div>
                    <div >Clicks</div>
                    <div >Budget</div>
                    <div >Location</div>
                    <div >Platform</div>
                    <div >Status</div>
                    <div >Action</div>

                </div>

            </div>

        </div>
    )
}

export default CampaignList
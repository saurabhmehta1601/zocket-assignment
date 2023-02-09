import React, { useState } from 'react'
import AddNewCampaign from '../components/AddNewCampaign'
import DashboardLayout from '../components/Layout/DashboardLayout'

const AllCampaigns = () => {
    return (<DashboardLayout>
        <AddNewCampaign />
    </DashboardLayout>

    )
}

export default AllCampaigns
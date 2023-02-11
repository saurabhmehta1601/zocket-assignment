import React, { useState } from 'react'
import { campaignSuggestions } from '../../../constants/campaignSuggestions'
import Card from '../../Card'
import ProductCard from './ProductCard'

const Step4 = () => {
    const [selectedCampaignSuggestionId, setSelectedCampaignSuggestionId] = useState<number | null>(null)
    return (
        <div>
            <Card>
                <div className='h5'> Ready to go <span className='secondaryText'>(Step 4 of 4)</span></div>
                <div className='hr'></div>

                <div className='grid grid-cols-4 gap-x-3'>
                    {campaignSuggestions.map(campaign => (
                        <ProductCard
                            isSelected={campaign.id === selectedCampaignSuggestionId}
                            onClick={() => setSelectedCampaignSuggestionId(campaign.id)}
                            campaign={campaign} />))}
                </div>
            </Card>
            <div className='flex justify-end '>
                <button className='primaryButton'>Start campaign</button>
            </div>
        </div>)
}

export default Step4
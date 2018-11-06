import React from 'react'
import {ServisePageDescriptionSC, SliderSircleElementSC, SliderTextContentSC} from '../../lib/styledComponents'

const ServiceDescription = (props) => {
    const {header_image, service_name, service_full_description} = props.data
    return (
        <ServisePageDescriptionSC bg={header_image.url}>
        <SliderSircleElementSC/>
            <SliderTextContentSC>
                <h1>{service_name}</h1>
                <p>{service_full_description}</p>
            </SliderTextContentSC>
        </ServisePageDescriptionSC>
    )
}
export default ServiceDescription
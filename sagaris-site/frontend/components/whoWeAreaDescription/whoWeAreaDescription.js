import React from 'react'
import {WhoWeAreaDescriptionSC, SliderSircleElementSC, WhoWeAreWrapper} from '../../lib/styledComponents'

const WhoWeAreaDescription = (props) => {
    return (
        <WhoWeAreaDescriptionSC>
            <SliderSircleElementSC/>
                <WhoWeAreWrapper>
                    <h1>{props.title}</h1>
                    <p>{props.about}</p>
                </WhoWeAreWrapper>
        </WhoWeAreaDescriptionSC>
    )
}
export default WhoWeAreaDescription
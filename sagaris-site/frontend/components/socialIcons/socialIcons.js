import React from 'react'
import {FacebookSC, LinkedinSC, TelegramSC, InstagramSC, SocialsWrapperSC, SocialLinkSC} from '../../lib/styledComponents'

const SocialIcons = (props) => {
    return (
        <SocialsWrapperSC>
            <SocialLinkSC href="#"><LinkedinSC rgba={props.rgba} color={props.color}/></SocialLinkSC>
            <SocialLinkSC href="#"><FacebookSC rgba={props.rgba} color={props.color}/></SocialLinkSC>
            <SocialLinkSC href="#"><TelegramSC rgba={props.rgba} color={props.color}/></SocialLinkSC>
            <SocialLinkSC href="#"><InstagramSC rgba={props.rgba} color={props.color}/></SocialLinkSC>
        </SocialsWrapperSC>) 
}

export default SocialIcons
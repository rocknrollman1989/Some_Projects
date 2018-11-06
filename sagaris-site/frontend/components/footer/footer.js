import React from 'react'
import { FooterContainerSC } from '../../lib/styledComponents'
import SocialIcons from '../socialIcons/socialIcons'
import Logo from '../logo/logo';


const Footer = () => {
    return(
    
        <FooterContainerSC>
            <Logo/>
            <SocialIcons size='20'/>
        </FooterContainerSC>
   
    )
}

export default Footer
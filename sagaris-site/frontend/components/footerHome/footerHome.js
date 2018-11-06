import React from 'react'
import { FooterContainerHomeSC, LineInFooterSC } from '../../lib/styledComponents'
import SocialIcons from '../socialIcons/socialIcons'
import Logo from '../logo/logo';


const FooterHome = () => {
    return(
    
        <FooterContainerHomeSC>
            <LineInFooterSC/>
            <Logo/>
            <SocialIcons size='20'/>
        </FooterContainerHomeSC>
   
    )
}

export default FooterHome
import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import {LogoHomeContainerSC, ImageLogoSC} from '../../lib/styledComponents'



const LogoHome = (props) =>{
    return(
        <LogoHomeContainerSC>
            <Link prefetch href='/'>
                <ImageLogoSC src="../../static/HomeLogoHeader.png" alt="иконка"/>
            </Link>
        </LogoHomeContainerSC>
    )

}

export default withRouter(LogoHome)

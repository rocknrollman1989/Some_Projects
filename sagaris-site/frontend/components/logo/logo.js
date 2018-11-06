import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import {LogoContainerSC, ImageLogoSC} from '../../lib/styledComponents'



const Logo = (props) =>{
    return(
        <LogoContainerSC>
            <Link prefetch href='/'>
                <ImageLogoSC src="../../static/favicon.png" alt="иконка"/>
            </Link>
        </LogoContainerSC>
    )

}

export default withRouter(Logo)

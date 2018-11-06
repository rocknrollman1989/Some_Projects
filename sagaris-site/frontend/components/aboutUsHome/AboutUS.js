import React from 'react'
import { connect } from 'react-redux'
import {AboutUsContainerBackgroundSC, AboutUsContainerInfoSC, LineByDivSC, AboutUsContainerlinkSC , SocialsWrapperSC, SliderSircleElementSC } from '../../lib/styledComponents' 
import Link from 'next/link'
import SocialIcons from '../socialIcons/socialIcons'

class AboutUS extends React.Component {


    render() {
        const {about, about_description} = this.props.home_page
        return (
            <>
                <AboutUsContainerBackgroundSC>

                    <AboutUsContainerInfoSC>
                        <h1>{about}</h1>
                        <p>{about_description}</p>
                        
                    </AboutUsContainerInfoSC>
                    <AboutUsContainerlinkSC>
                        <LineByDivSC/>
                        <Link  passHref prefetch href={`/whoweare`} as={`/whoweare`} >
                            <a>{this.props.read_more}</a>
                        </Link>
                    </AboutUsContainerlinkSC>
                    <SocialsWrapperSC>
                        <SocialIcons size='20'/>
                    </SocialsWrapperSC>
                    <SliderSircleElementSC/>
                </AboutUsContainerBackgroundSC>
            </>
        )
    }
}

function mapStateToProps(state) {
    const {read_more} = state.translation[0].acf.buttons
    const {home_page} = state.translation[0].acf
    return { home_page, read_more }
}


export default connect(mapStateToProps)(AboutUS)
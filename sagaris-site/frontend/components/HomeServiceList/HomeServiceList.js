import React  from 'react'
import { connect } from 'react-redux'
import ServiceList from '../serviceList'
import MobileServiceList from '../mobileServiceList'
import {HomeServiceContainerBackgroundSC, HomeServiceContainerInfoSC,  SliderSircleElementSC } from '../../lib/styledComponents' 


class HomeService extends React.Component {


    render() {
        const {services, services_description} = this.props.home_page
        return (
            <>
                <HomeServiceContainerBackgroundSC>

                    <HomeServiceContainerInfoSC>
                        <h1>{services}</h1>
                        <p >{services_description}</p>
                        
                    </HomeServiceContainerInfoSC>
                    <MobileServiceList/>
                    
                    <ServiceList main={true}/>

                    <SliderSircleElementSC/>
                </HomeServiceContainerBackgroundSC>
            </>
        )
    }
}


function mapStateToProps(state) {
    const {home_page} = state.translation[0].acf
    return { home_page }
}

export default connect(mapStateToProps)(HomeService)
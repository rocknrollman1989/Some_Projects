import React, {Component} from 'react'
import { connect } from 'react-redux'
import { MobileServicesListSC, ISOA } from '../../lib/styledComponents'
import ServiceHome from '../serviceHome'
import Link from 'next/link'
import {oneColumnSlider} from '../../lib/appconf'
import SliderHOC from '../slider'


class MobileServiceList extends Component {

    mapedServices = () => {
        const { services } = this.props
        const arrayOfServices = Object.values(services)
        const mapedServices = arrayOfServices.map((service, i)=>{
            const { service_name, service_img, service_main_page } = service.acf
            let textStyle, servBorder, bottomBorder;
            i%2? textStyle ='right':textStyle ='left';
            i>1? servBorder=true: null;
            i < arrayOfServices.length - 2 ? bottomBorder = true : bottomBorder = false;
            return (
                <Link key={service.id} passHref prefetch href={`/service.template?slug=${service.slug}`} as={`/services/${service.slug}`} >
                    <ISOA>
                        <ServiceHome show={this.props.show_btn} bottomBorder={bottomBorder} topBorder={servBorder} position={textStyle} id={service.id} slug={service.slug } name={service_name} description={service_main_page} img={service_img.url}/>
                    </ISOA>
                 </Link>
            )
        })
        return mapedServices
    }

    render() {
        return(
            <MobileServicesListSC> 
                <SliderHOC area={""} content={this.mapedServices()} cName='MobServSlider'  settings={oneColumnSlider} /> 
            </MobileServicesListSC>
        )
    }
}

function mapStateToProps(state) {
    const show_btn = state.translation[0].acf.buttons.show
    const { services } = state
    return { services, show_btn }
}

export default connect(mapStateToProps)(MobileServiceList)
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { ServicesListSC, ISOA } from '../../lib/styledComponents'
import Service from '../service'
import ServiceHome from '../serviceHome'
import Link from 'next/link'


class ServiceList extends Component {

    mapedServices = () => {
        const { services } = this.props
        const arrayOfServices = Object.values(services)
        const mapedServices = arrayOfServices.map((service, i)=>{
            const { service_name, service_img, service_main_page } = service.acf
            let textStyle, servBorder, bottomBorder, bottomFirstBorder;
            i%2? textStyle ='right':textStyle ='left';
            i>1? servBorder=true: null;
            i==0? bottomFirstBorder = true: null;
            i < arrayOfServices.length - 2 ? bottomBorder = true : bottomBorder = false;
            return (
                <Link key={service.id} passHref prefetch href={`/service.template?slug=${service.slug}`} as={`/services/${service.slug}`} >
                    <ISOA>
                        {this.props.main ? 
                            <ServiceHome show={this.props.show_btn} bottomBorder={bottomBorder} topBorder={servBorder} position={textStyle} id={service.id} slug={service.slug } name={service_name} description={service_main_page} img={service_img.url}/> : 
                            <Service bottomBorder={bottomBorder} bottomFirstBorder={bottomFirstBorder} topBorder={servBorder} position={textStyle} id={service.id} slug={service.slug } name={service_name} img={service_img.url}/> 
                        }
                    </ISOA>
                 </Link>
            )
        })
        return mapedServices
    }

    render() {
        return(
            <ServicesListSC>
                {this.mapedServices()}
            </ServicesListSC>
        )
    }
}

function mapStateToProps(state) {
    const show_btn = state.translation[0].acf.buttons.show
    const { services } = state
    return { services, show_btn }
}

export default connect(mapStateToProps)(ServiceList)
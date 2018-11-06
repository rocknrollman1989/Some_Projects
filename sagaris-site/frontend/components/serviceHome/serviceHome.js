import React, {Component } from "react"
import { ServiceHomeDivElementSC, NameOfServicesHomeSC, ServiceHomeContainerlinkSC, LineByDivSC } from '../../lib/styledComponents'
import PropTypes from 'prop-types'
// import Link from 'next/link'




class ServiceHome extends Component {

    render() {
            
        const { name, img, position , topBorder, bottomBorder} = this.props
        return (
                <ServiceHomeDivElementSC  position={position} bottomBorder={bottomBorder} topBorder={topBorder} >
                    <NameOfServicesHomeSC  BGimg={img}  position={position}>{name} </NameOfServicesHomeSC>
                    <p className={name.length < 19 ? 'shortTitle' : ''}>{this.props.description}</p>
                    <ServiceHomeContainerlinkSC>
                        <LineByDivSC/>
                        <span>{this.props.show}</span>
                    </ServiceHomeContainerlinkSC>
                </ServiceHomeDivElementSC>
                
        )
    }
}

ServiceHome.propTypes = {
    name: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    img: PropTypes.string
}

export default ServiceHome



import React, {Component } from "react"
import { ServiceDivElementSC, NameOfServicesSC } from '../../lib/styledComponents'
import PropTypes from 'prop-types'




class Service extends Component {

    render() {
            
        const { name, img, position , topBorder, bottomBorder, bottomFirstBorder} = this.props
       
        return (
                <ServiceDivElementSC  position={position} bottomFirstBorder={bottomFirstBorder} bottomBorder={bottomBorder} topBorder={topBorder} >
                    <NameOfServicesSC BGimg={img}  position={position}>{name} </NameOfServicesSC>
                </ServiceDivElementSC>
        )
    }
}

Service.propTypes = {
    name: PropTypes.string.isRequired,
    // description: PropTypes.string.isRequired,
    img: PropTypes.string
}

export default Service



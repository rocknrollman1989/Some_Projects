import React from 'react'
import {ContactInfoSC, ContainerForIconsContactsSC} from '../../lib/styledComponents'
import SocialIcons from '../socialIcons/socialIcons'


const ContactInfo = (props) => {
    const {email, phone, title} = props.contacts
    
    const mapedPhones = phone.number.map((numb, i) => {
        return <p key={i}> {numb.number} </p>
    })
    return(
        <ContactInfoSC>
            <h2>{title}</h2>
            <h3>{email.title} : <span>{email.adress}</span></h3>
            <h3>{phone.title} : {mapedPhones}</h3>
            <h4>We in social:</h4>
            <ContainerForIconsContactsSC>
                <SocialIcons rgba='rgba(255,255,255,0.4)' color='#fff'/>
            </ContainerForIconsContactsSC>
        </ContactInfoSC>
    )
}

export default ContactInfo
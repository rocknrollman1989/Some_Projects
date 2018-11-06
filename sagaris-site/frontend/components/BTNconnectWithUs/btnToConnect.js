import React, { Component } from 'react'
import { ButtonToConnectToUsSC, ContactsPopUpSC } from '../../lib/styledComponents'
import ContactForm from '../../components/contactForm'


class ButtonToConnect extends Component {
    constructor(props){
        super(props)
        this.state = {
            isHidden: true,
            path: this.props.pathname
        }
        this.contactFormRef = React.createRef()
        this.buttonRef = React.createRef()
    }

    componentDidMount () { 
        window.addEventListener('mousedown', this.handleClick,false)
       }
    
      componentWillUnmount () { 
        window.removeEventListener('mousedown', this.handleClick,false)
      }

    handleClick = (e) => {
        if(!this.contactFormRef.current.contains(e.target)) {
            this.setState({isHidden: true})
        }
    }

    openPopUp = (e) => {
        this.setState({isHidden:!this.state.isHidden})
    }

    shouldComponentUpdate(){
        return this.state.path == this.props.pathname ? true : false
    }
    
    

    render() {
        const {connect, pathname} = this.props
        return(<>
            {pathname === '/' ? <ButtonToConnectToUsSC href="#contact" type='button'>{connect}</ButtonToConnectToUsSC> : <ButtonToConnectToUsSC innerRef={this.buttonRef} onClick={this.openPopUp} type='button'>{connect}</ButtonToConnectToUsSC>}
            <ContactsPopUpSC burger={this.props.burger} innerRef={this.contactFormRef} hidden={this.state.isHidden}>
                <p>Connect with us</p>
                <ContactForm lang={this.props.lang} my_link={this.props.my_link} forsales={this.props.forsales} orgid={this.props.orgid} form={this.props.form} send={this.props.send}/>
            </ContactsPopUpSC>
        </>)
    }
}


export default ButtonToConnect
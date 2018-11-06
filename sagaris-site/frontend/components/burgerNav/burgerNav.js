import React, {Component} from 'react'
import {BurgerNavSC, ContainerForLogoHeaderSC, OpenBurgDivSC, NavigationMobileSC} from '../../lib/styledComponents'
import LanguageSwitcher from '../languageSwitcher'
import Logo from '../logo'
import Nav from '../nav'
import ButtonToConnect from '../BTNconnectWithUs'
import SocialIcons from '../socialIcons/socialIcons'
import {connect} from 'react-redux'

class BurgerNav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    handleClick = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
 
    render() {
        // const { pathname } = this.props.router
        return (
            <BurgerNavSC>
                <div onClick={this.handleClick}>{this.state.isOpen ? '' : <img src="../../static/burg.png"/>}</div>
                <NavigationMobileSC hidden={!this.state.isOpen}>
                    <OpenBurgDivSC onClick={this.handleClick}>{this.state.isOpen ? <img src="../../static/burg_close.png"/> : <img src="../../static/burg.png"/>}</OpenBurgDivSC>
                    <LanguageSwitcher/>
                    <ContainerForLogoHeaderSC>
                        <Logo/>
                    </ContainerForLogoHeaderSC>
                    <Nav/>
                    <ButtonToConnect burger={true} send={this.props.send} connect={this.props.connect_with_us}/>
                    <SocialIcons size='20'/>
                </NavigationMobileSC>
            </BurgerNavSC>
        )
    }
}

function mapStateToProps(state) {
    const { connect_with_us, send } = state.translation[0].acf.buttons
    return {connect_with_us, send}
}

export default connect(mapStateToProps)(BurgerNav)
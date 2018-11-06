import React, { Component } from 'react'
import { withRouter } from 'next/router'
import LogoHome from '../LogoHome'
import Nav from '../nav'
import { HeaderHomeElement,  ContainerForLogoHeaderHomeSC, BurgContainerSC } from '../../lib/styledComponents'
import LanguageSwitcher from '../languageSwitcher'
import ButtonToConnect from '../BTNconnectWithUs'
import {connect} from 'react-redux'
import BurgerNav from '../burgerNav'


class HeaderHome extends Component {


    render() {
        const { pathname } = this.props.router
        return (<>
            <HeaderHomeElement>
                <ContainerForLogoHeaderHomeSC>
                    <LogoHome/>
                </ContainerForLogoHeaderHomeSC>
                <Nav/>
                {pathname == '/contacts' ? "" : <ButtonToConnect pathname={pathname} send={this.props.send} connect={this.props.connect_with_us}/>}
                <LanguageSwitcher/>
                <BurgContainerSC>
                    <BurgerNav/>
                </BurgContainerSC>
            </HeaderHomeElement>
        </>)
    }
}

function mapStateToProps(state) {
    const { connect_with_us, send } = state.translation[0].acf.buttons
    return {connect_with_us, send}
}
export default withRouter(connect(mapStateToProps)(HeaderHome))
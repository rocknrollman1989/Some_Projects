import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Logo from '../logo'
import Nav from '../nav'
import { HeaderElement, BurgContainerSC, LineInHeaderSC, ContainerForLogoHeaderSC } from '../../lib/styledComponents'
import LanguageSwitcher from '../languageSwitcher'
import ButtonToConnect from '../BTNconnectWithUs'
import {connect} from 'react-redux'
import BurgerNav from '../burgerNav'
import nookies from 'nookies'


class Header extends Component {


    render() {
        const { pathname } = this.props.router
        return (<>
            <HeaderElement>
                <ContainerForLogoHeaderSC>
                    <Logo/>
                </ContainerForLogoHeaderSC>
                <Nav/>
                {pathname == '/contacts' ? "" : <ButtonToConnect pathname={pathname}  lang={nookies.get().lang} language={this.props.language} forsales={this.props.forsales} form={this.props.form} my_link={this.props.my_link} orgid={this.props.orgid} send={this.props.send} connect={this.props.connect_with_us}/>}
                <LanguageSwitcher/>
                <BurgContainerSC>
                    <BurgerNav/>
                </BurgContainerSC>
                <LineInHeaderSC/>
            </HeaderElement>
        </>)
    }
}

function mapStateToProps(state) {
    const { connect_with_us, send } = state.translation[0].acf.buttons
    const form = state.translation[0].acf.contact_form
    const {my_link, orgid, forsales, language} = state.forsalesforce[0].acf
   
    return {connect_with_us, send, form, my_link, orgid, forsales, language}
}
export default withRouter(connect(mapStateToProps)(Header))
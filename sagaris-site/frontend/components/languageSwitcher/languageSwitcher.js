import React, { Component } from 'react'
import { LangSwitcher, ContainerLangSwitcherSC } from '../../lib/styledComponents'
import nookies from 'nookies'
import { connect } from 'react-redux'
import {switcher} from '../../helpers/switchLanguages.helper'

const LangList = [
    {
        slug: 'en',
        label: 'English'
    },
    {
        slug: 'ua',
        label: 'Українська'
    },
    {
        slug: 'fr',
        label: 'Franse'
    }
]

 class LanguageSwitcher extends Component {

    componentWillMount = () => {
        this.LangListJSX = LangList.map((lng) => {
            return <LangSwitcher onClick={this.langSwitch} key={lng.slug} id={lng.slug}> {lng.slug} </LangSwitcher>
        })
    }

    langSwitch = (e) => {
        e.preventDefault();
        const { dispatch } = this.props
        nookies.set(null, 'lang', e.target.id)
        switcher(e.target.id, dispatch)
        
    }

    render () {
        return (
            <ContainerLangSwitcherSC>{this.LangListJSX}</ContainerLangSwitcherSC>
    )
    }

}

export default connect()(LanguageSwitcher)
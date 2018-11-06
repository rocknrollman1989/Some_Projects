import React, {Component} from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { NavigationSC, StyledLink } from '../../lib/styledComponents'
import {connect} from 'react-redux'


class Nav extends Component {
  render() {
    const {pathname} = this.props.router
    const {services, projects, who_we_are, contacts} = this.props.menu
    return (<>
      <NavigationSC>
        <Link prefetch href='/services'>
          <StyledLink passHref active={pathname === '/services' ? true : false}>{services}</StyledLink>
        </Link>
        <Link prefetch href='/projects'>
          <StyledLink active={pathname === '/projects' ? true : false}>{projects}</StyledLink>
        </Link>
        <Link prefetch href='/whoweare'>
          <StyledLink passHref active={pathname === '/whoweare' ? true : false}>{who_we_are}</StyledLink>
        </Link>
        <Link prefetch href='/contacts'>
        <StyledLink passHref active={pathname === '/contacts' ? true : false}>{contacts}</StyledLink>
        </Link>
      </NavigationSC>
    </>)
  }
}

function mapStateToProps(state) {
  const { menu } = state.translation[0].acf
  return { menu }
}

export default connect(mapStateToProps)(withRouter(Nav))

import React from 'react'
import { connect } from 'react-redux'
import { IndexContainerFooterBackSC } from '../lib/styledComponents'

//Components
import Head from '../components/head'
import HeaderHome from '../components/HeaderHome'
import Header from '../components/header'
import AboutUS from '../components/aboutUsHome'
import HomeServiceList from '../components/HomeServiceList'
import HomeProjectList from '../components/homeProjectList'
import FeedBackList from '../components/feedbackList'
import ContactsWrapper from '../components/contactsWrapper'
import FooterHome from '../components/footerHome'




class Index extends React.Component {
  
  static async getInitialProps() {
    
    return {}
  }
  constructor(props) {
    super(props)
    this.state = {
      isHeader: false
    }
  }
  

  componentDidMount () { 
    window.addEventListener('scroll', this.handleScroll)
   }

  componentWillUnmount () { 
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    event.currentTarget.scrollY > 300 ? this.setState({isHeader: true}) : this.setState({isHeader: false})
  }

  render () {
    return (
      <>
        <Head/>
        <HeaderHome/>
        {this.state.isHeader ? <Header/> : null}
        <AboutUS />
        <HomeServiceList/>
        <IndexContainerFooterBackSC>
          <HomeProjectList/>
          <FeedBackList />
          <ContactsWrapper />
          <FooterHome/>
        </IndexContainerFooterBackSC>
      </>
    )
  }
}


export default connect()(Index)

import React from 'react'
import { connect } from 'react-redux'
import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { ContactsLayoutSC } from '../lib/styledComponents'
import ContactsWrapper from '../components/contactsWrapper/contactsWrapper'

class Contacts extends React.Component {


    componentDidMount() { }

    componentWillUnmount() { }

    render() {

        return (
            <ContactsLayoutSC>
                <Head />
                <Header />
                <ContactsWrapper />
                <Footer />
            </ContactsLayoutSC>
        )
    }
}


export default connect()(Contacts)

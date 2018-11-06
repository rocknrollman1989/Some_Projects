import React from 'react'
import { connect } from 'react-redux'
import ContactForm from '../contactForm/'
import { ContactsWrapperSC, SliderSircleElementSC, ContainerForElementsContactsSC } from '../../lib/styledComponents'
import ContactInfo from '../contactInfo'
import nookies from 'nookies'
import ScrollableAnchor from 'react-scrollable-anchor'


class ContactsWrapper extends React.Component {


    componentDidMount() {  }

    componentWillUnmount() { }

    render() {

        return (
            <ScrollableAnchor id={'contact'}>
                <ContactsWrapperSC>
                    <SliderSircleElementSC/>
                    <ContainerForElementsContactsSC>
                        <ContactInfo contacts={this.props.contacts}/>
                        <h1>Feedback</h1>
                        <ContactForm send={this.props.send} language={this.props.language} forsales={this.props.forsales}  my_link={this.props.my_link} orgid={this.props.orgid} lang={nookies.get().lang} form={this.props.form}/>
                    </ContainerForElementsContactsSC>
                </ContactsWrapperSC>
            </ScrollableAnchor>
        )
    }
}

function mapStateToProps(state) {
    const { send } = state.translation[0].acf.buttons;
    const form = state.translation[0].acf.contact_form;
    const { acf } = state.contacts[0];
    const {my_link, orgid, forsales, language} = state.forsalesforce[0].acf;
    // console.log(language, forsales)
    return { contacts: acf, send, form, my_link, orgid, forsales, language}
}

export default connect(mapStateToProps)(ContactsWrapper)

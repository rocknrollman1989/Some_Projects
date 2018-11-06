import React from 'react'
import { connect } from 'react-redux'
import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import WhoWeAreaDescription from '../components/whoWeAreaDescription'
import {WhoWeAreLayout} from '../lib/styledComponents'
import TeamMembers from '../components/teamMembers'

class WhoWeAre extends React.Component {


    componentDidMount() { }

    componentWillUnmount() { }

    render() {

        return (
            <WhoWeAreLayout>
                <Head />
                <Header />
                <WhoWeAreaDescription title={this.props.title} about={this.props.about_us}/>
                <TeamMembers team={this.props.team}/>
                <Footer />
            </WhoWeAreLayout>
        )
    }
}

function mapStateToProps(state) {
    const { team_member, title, about_us } = state.about[0].acf
    return { team: team_member, title, about_us }
}

export default connect(mapStateToProps)(WhoWeAre)

import React  from 'react'
import { connect } from 'react-redux'
import ProjectList from '../projectList'
import MobileProjectList from '../mobileProjectList'
import {HomeProjectsContainerBackgroundSC, HomeProjectsContainerInfoSC,  SliderSircleElementSC } from '../../lib/styledComponents' 


class HomeProject extends React.Component {


    render() {
        const {projects, projects_description} = this.props.home_page
        return (
            <>
                <HomeProjectsContainerBackgroundSC>

                    <HomeProjectsContainerInfoSC>
                        <h1>{projects}</h1>
                        <p>{projects_description}</p>
                        
                    </HomeProjectsContainerInfoSC>
                    <MobileProjectList/>
                    <ProjectList main={true}/>

                    <SliderSircleElementSC/>
                </HomeProjectsContainerBackgroundSC>
            </>
        )
    }
}

function mapStateToProps(state) {
    const {home_page} = state.translation[0].acf
    return { home_page }
}

export default connect(mapStateToProps)(HomeProject)
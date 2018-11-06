import React from 'react'
import { connect } from 'react-redux'
import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import ProjectList from '../components/projectList'
import {ProjectsLayoutSC , ProjectsContainerForSliderSC, ProjectsContainerSC, ProjectLineByDivSC, SliderBackgroundImageProjectSC} from '../lib/styledComponents'
import SliderHOC from '../components/slider'
import {oneColumnSlider, backgroundSlider} from '../lib/appconf'
import Link from 'next/link'
import renderHTML from 'react-render-html'

class Projects extends React.Component {


    sliderData = () => {
        const {projects, show_btn} = this.props
        const maped = Object.values(projects).map((prj, i) => {
            return(
            <ProjectsContainerForSliderSC key={i}>
            
                <ProjectsContainerSC>
                    
                    <h1>{prj.acf.full_project_title}</h1>
                    <p key={i}>{renderHTML(prj.acf.project_short_description)}</p>
                </ProjectsContainerSC>
                <Link key={prj.id}  passHref prefetch href={`/project.template?slug=${prj.slug}`} as={`/projects/${prj.slug}`}>
                    <a href="">{show_btn}</a>
                </Link>
                <ProjectLineByDivSC/>
            </ProjectsContainerForSliderSC>
            )
        })
        return maped
    }

    sliderBackground = () => {
        const {projects} = this.props
        const maped = Object.values(projects).map((prj, i) => {
            return (<SliderBackgroundImageProjectSC key={prj.id}>
            <img src={prj.acf.header_image.url}/>
            </SliderBackgroundImageProjectSC>)
        })
        return maped
    }

    render() {
        return (
            <>  
                <ProjectsLayoutSC>
                    <Head />
                    <Header />
                    <SliderHOC area={"ProjectsSlider"} cName='projectSlider' content={this.sliderData()} sliderBackgrounds={this.sliderBackground()} settings={oneColumnSlider} backSliderSettings={backgroundSlider}/> 
                    <ProjectList />
                    <Footer />
                </ProjectsLayoutSC>
            </>
        )
    }
}

function mapStateToProps(state) {
    const show_btn = state.translation[0].acf.buttons.show_more
    const { projects } = state
    return { projects, show_btn }
}

export default connect(mapStateToProps)(Projects)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProjectListSC, ISOA } from '../../lib/styledComponents'
import Project from '../project'
import ProjectHome from '../projectHome'
import Link from 'next/link'


class ProjectList extends Component {

    mapedProjects = () => {
        const { projects } = this.props
        const arrayOfProjects = Object.values(projects)
        const mapedProjects = arrayOfProjects.map((project, i) => {
            const { full_project_title, tile_image, project_main_page } = project.acf
            let nameOfProject;
            i%2 ? nameOfProject ='right':nameOfProject ='left'
            return (
                <Link key={project.id}  passHref prefetch href={`/project.template?slug=${project.slug}`} as={`/projects/${project.slug}`}>
                    <ISOA>
                    {this.props.main ? 
                        <ProjectHome
                        id={project.id} 
                        slug={project.slug}
                        name={full_project_title} 
                        description={project_main_page} 
                        img={tile_image.sizes.medium_large }
                        side={nameOfProject}
                        show={this.props.show_btn} />:
                        <Project 
                        id={project.id} 
                        slug={project.slug}
                        name={full_project_title} 
                        description={project_main_page} 
                        img={tile_image.sizes.medium_large }
                        side={nameOfProject} />}
                    </ISOA>
                </Link>
            )
        })
        return mapedProjects
    }

    render() {
        return (
            <ProjectListSC>
                {this.mapedProjects()}
            </ProjectListSC>
        )
    }
}

function mapStateToProps(state) {
    const show_btn = state.translation[0].acf.buttons.show
    const { projects } = state
    return { projects, show_btn }
}

export default connect(mapStateToProps)(ProjectList) 


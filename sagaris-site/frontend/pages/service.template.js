import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Service from '../components/service'
import Projects from '../components/project'
import { ISOA, ProjectsLayoutSC, ProjectListSC, ServisePageDescriptionSC } from '../lib/styledComponents'
import Link from 'next/link'
import ServiceDescription from '../components/servicePageDescription'
import renderHTML from 'react-render-html'


class ServiceTemplate extends Component {

    relatedPrejects = () => {
        const { relatedProjects } = this.props
        const projects = relatedProjects.map((prj) => {
            const { full_project_title, project_short_description, tile_image } = prj.acf
            return (
                <Link key={prj.id} passHref prefetch href={`/project.template?slug=${prj.slug}`} as={`/projects/${prj.slug}`}>
                    <ISOA>
                        <Projects name={full_project_title} description={renderHTML(project_short_description)} img={tile_image.sizes.medium_large}/>
                    </ISOA>
                </Link>
            )
        })
        return projects
    }

    render(){
        return(<>
            {/* <Head/>
            <Header/>
            <SERVICETEMPLATE>
                <SERVICEMAIN>
                    <Service name={service_name} description={service_short_description} img={service_img.url} />
                </SERVICEMAIN>
                <SERVICEPROJ>
                    {this.relatedPrejects()}
                </SERVICEPROJ>
                <SERVICEDESC>
                    description
                </SERVICEDESC>
            </SERVICETEMPLATE>
            <Footer/> */}
            
            <Head />
            <ProjectsLayoutSC>
                    <Header />
                    <ServiceDescription data={this.props.service.acf}/>
                    <ProjectListSC>
                        {this.relatedPrejects()}
                    </ProjectListSC>
                    <Footer />
            </ProjectsLayoutSC>
        </>)
    }
}


function mapStateToProps(state, ownProps) {
    const { services, projects } = state
    const { slug } = ownProps.router.query
    let relatedProjectsList = []
    const service = Object.values(services).filter((serv) => serv.slug == slug)
    Array.isArray(service[0].acf.related_projects) ? relatedProjectsList.push(...service[0].acf.related_projects) : relatedProjectsList.push(service[0].acf.related_projects)
    const relatedProjects = Object.values(projects).filter((prj) => relatedProjectsList.includes(prj.id))
    return { service: service[0], relatedProjects }
}

export default withRouter(connect(mapStateToProps)(ServiceTemplate))
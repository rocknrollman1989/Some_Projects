import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { ProjectInfoSC, ProjectHeaderSC, ProjectInfoWrapperSC, ProjectHeadContainerSC, SliderSircleElementSC, ProjectInfoContainerSC} from '../lib/styledComponents'
import renderHTML from 'react-render-html'


class ProjectTemplate extends Component {

    bodyTextParser = () => {
        const { paragraph } = this.props.project.acf
        const maped = paragraph.map((cont, i) => {
            return (<div key={i}>
            <ProjectInfoContainerSC>
                <p>{renderHTML(cont.upper_text)}</p>
                <img src={cont.image.url}/>
                {cont.under_image_text ? <p>{renderHTML(cont.under_image_text)}</p> : null}
                
            </ProjectInfoContainerSC>
               
            </div>)
        })
        return maped
    }

    render() {
        // const testRelServ = this.props.relatedServices.map(serv => <i key={serv.id} style={{ color: 'darkred' }}>{serv.acf.service_name}</i>)
        const { header_image, full_project_title, project_header_description} = this.props.project.acf
        return (<>
            <ProjectInfoSC>
                <Head />
                <Header />
                <ProjectHeaderSC src={header_image.url}>
                    <SliderSircleElementSC/>
                        <ProjectHeadContainerSC>
                        <h1>{full_project_title}</h1>
                        <p>{renderHTML(project_header_description)}</p>
                        </ProjectHeadContainerSC>
                </ProjectHeaderSC>.
                <ProjectInfoWrapperSC>
                   {this.bodyTextParser()}
                   <Link prefetch href='/projects'>
                    <a href='#'>other projects ></a>
                    </Link>
                </ProjectInfoWrapperSC>
                <Footer />
            </ProjectInfoSC>
        </>)
    }
}

function mapStateToProps(state, ownProps) {
    const { services, projects } = state
    const { slug } = ownProps.router.query
    let relatedServiceList = []
    const project = Object.values(projects).filter((prj) => prj.slug == slug)
    Array.isArray(project[0].acf.related_services) ? relatedServiceList.push(...project[0].acf.related_services) : relatedServiceList.push(project[0].acf.related_services)
    const relatedServices = Object.values(services).filter((serv) => relatedServiceList.includes(serv.id))
    return { project: project[0], relatedServices }
}


export default withRouter(connect(mapStateToProps)(ProjectTemplate))
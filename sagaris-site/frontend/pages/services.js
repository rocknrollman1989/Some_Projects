import React from 'react'
import { connect } from 'react-redux'
import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import ServiceList from '../components/serviceList'
import {ServicesLayoutSC, SliderBackgroundImageSC, ContainerForSliderElementsSC,  SliderTextContentSC, ProjectLineByDivSC} from '../lib/styledComponents'
import SliderHOC from '../components/slider'
import {oneColumnSlider, backgroundSlider} from '../lib/appconf'
import Link from 'next/link'
import renderHTML from 'react-render-html'

class Services extends React.Component {


    componentDidMount() { }

    componentWillUnmount() { }

    sliderData = () => {
        const {services, show_btn} = this.props
        const maped = Object.values(services).map((serv, i) => {
            return (<ContainerForSliderElementsSC key={i}>
                <img src={serv.acf.service_img.sizes.medium_large}/>
                <ProjectLineByDivSC/>
                <Link key={serv.id} passHref prefetch href={`/service.template?slug=${serv.slug}`} as={`/services/${serv.slug}`} >
                    <a>{show_btn}</a>
                </Link>
                <SliderTextContentSC>
                    <h1>{serv.acf.service_name}</h1>
                    <p key={i}>{renderHTML(serv.acf.service_short_description)} </p>
                </SliderTextContentSC>
            </ContainerForSliderElementsSC>)
        })
        return maped
    }

    sliderBackground = () => {
        const {services} = this.props
        const maped = Object.values(services).map((serv, i) => {
            return ( 
             <SliderBackgroundImageSC key={serv.id}>
             <img src={serv.acf.header_image.url}/>
             </SliderBackgroundImageSC>
        )
        })
        return maped
    }

    render() {
        return (<>
            <Head />
            <ServicesLayoutSC>
                <Header /> 
                <SliderHOC area={"ServicesSlider"} content={this.sliderData()} sliderBackgrounds={this.sliderBackground()} settings={oneColumnSlider} backSliderSettings={backgroundSlider}/> 
                <ServiceList/>
                <Footer />
            </ServicesLayoutSC>  
        </>)
    }
}

function mapStateToProps(state) {
    const show_btn = state.translation[0].acf.buttons.show_more
    const { services } = state
    return { services, show_btn }
}

export default connect(mapStateToProps)(Services)

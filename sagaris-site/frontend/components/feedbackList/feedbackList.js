import React, {Component} from 'react'
import { FEEDBACKLIST, FeedSircleElementSC, FEEDBACKLISTMobSC } from '../../lib/styledComponents'
import Feedback from '../feedback'
import Slider from '../slider'
import {twoColumnSlider, oneColumnSlider} from '../../lib/appconf'
import { connect } from 'react-redux'
import withSizes from 'react-sizes'



class FeedBackList extends Component {
    

    mapedReviews = () => {
        const { reviews } = this.props
        const arrayOfReviews = Object.values(reviews)
        const mapedReviews = arrayOfReviews.map((reviewed, i)=>{
            const { name, photo, review } = reviewed.acf
            let pos;
    
            i % 2 ? pos ='left' : pos ='right';
            return (
                <Feedback key={reviewed.id} pos={pos} url={photo.sizes.medium_large} review={review} name={name} />
            )
        })
        return mapedReviews
    }


   


    render() {
        const content = this.mapedReviews()
        return (<>
        <FEEDBACKLIST>
            <h2>Reviews</h2>
            <FeedSircleElementSC/>
            <Slider cName='reviewSlider' settings={twoColumnSlider} content={content}/>
        </FEEDBACKLIST></>)
    }
}

function mapStateToProps(state) {
    // const show_btn = state.translation[0].acf.buttons.show_more
    const { reviews } = state
    return { reviews }
}

const mapSizesToProps = ({ width }) => ({
    isMobile: width < 768,
    resolution: width < 768 ? 'mob' : 'full',
  })


export default connect(mapStateToProps)(withSizes(mapSizesToProps)(FeedBackList))
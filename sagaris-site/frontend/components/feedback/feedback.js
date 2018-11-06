import react from 'react'
import { FEEDBACK, FEEDBACKIMG, FEEDBACKTEXT } from '../../lib/styledComponents'

const Feedback = (props) => {

    return(
        <FEEDBACK pos={props.pos}>
            <FEEDBACKIMG url={props.url} />
            <h3>{props.name}</h3>
            <FEEDBACKTEXT>{props.review}</FEEDBACKTEXT>
        </FEEDBACK>
    )
}

export default Feedback
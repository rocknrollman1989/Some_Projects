import React, {Component} from "react"
import { ProjectSC, HiddenPSC } from '../../lib/styledComponents'

class Project extends Component {

    render() {
        const { name, description, img, side } = this.props
        return (
                <ProjectSC BGimg={img} side={side}>
                    <h3 side={side}>{name}</h3>
                    <HiddenPSC>{description}</HiddenPSC>
                    <h4>Show</h4>
                </ProjectSC>
        )
    }
}

export default Project
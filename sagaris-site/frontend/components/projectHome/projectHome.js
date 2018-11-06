import React, {Component} from "react"
import { ProjectHomeDivElementSC, ProjectPSC, NameOfProjectHomeSC, LineByDivSC } from '../../lib/styledComponents'

class ProjectHome extends Component {

    render() {
        const { name, description, img, side } = this.props
        return (
                <ProjectHomeDivElementSC BGimg={img} side={side}>
                    <NameOfProjectHomeSC side={side}>{name}</NameOfProjectHomeSC>
                    <ProjectPSC>{description}</ProjectPSC>
                    <LineByDivSC/>
                    <h4>{this.props.show}</h4>
                </ProjectHomeDivElementSC>
        )
    }
}

export default ProjectHome
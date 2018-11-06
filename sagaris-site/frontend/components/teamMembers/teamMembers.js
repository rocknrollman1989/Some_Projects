import React, {Component} from 'react'
import {TeamWrapperSC} from '../../lib/styledComponents'
import MemberInfo from '../teamMember'
import {connect} from 'react-redux'


class TeamMembers extends Component {

    mapedMembers = () => {
        const maped = this.props.team.map((member, i) => {
            let textStyle, servBorder, bottomBorder, bottomFirstElement;
            i%2? textStyle ='right':textStyle ='left';
            i>1? servBorder=true: null;
            i==0? bottomFirstElement = true : null;
            // console.log(bottomFirstElement);
            i < this.props.team.length - 2 ? bottomBorder = true : bottomBorder = false;
            return (
                <MemberInfo bottomFirstElement={bottomFirstElement} bottomBorder={bottomBorder} topBorder={servBorder} position={textStyle} key={i} member={member}/>
            )
        })
        return maped
    }

    render() {
        return(
            <TeamWrapperSC>
                {this.mapedMembers()}
            </TeamWrapperSC>
        )
    }
}



export default connect()(TeamMembers)
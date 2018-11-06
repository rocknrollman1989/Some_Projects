import React from 'react'
import {TeamMemberInfo} from '../../lib/styledComponents'
import { LinkedinSC, SocialLinkSC , TeamMemberInfoContainerSC} from '../../lib/styledComponents'

const MemberInfo = (props) => {
    const { position , topBorder, bottomBorder, bottomFirstElement} = props
    return(
        <TeamMemberInfo position={position} bottomBorder={bottomBorder} topBorder={topBorder} bottomFirstElement={bottomFirstElement}>
            <img src={props.member.photo.sizes.medium_large}/>
        <TeamMemberInfoContainerSC >
            <h4>{props.member.name}</h4>
            <p>{props.member.position}</p>
            <SocialLinkSC href={props.member.linkedin}><LinkedinSC color='#fff' rgba='rgba(255,255,255,0.2)'/></SocialLinkSC>
        </TeamMemberInfoContainerSC>
        </TeamMemberInfo>
    )
}

export default MemberInfo
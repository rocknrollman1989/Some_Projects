import React from 'react'
import sample from '../../static/video/MP4/road1.mp4';
import content from '../content/content'
import image from '../../static/video/MP4/road.jpg'




class MainPage extends React.Component{
    
   componentDidMount(){
   
   }
render(){

    return(
        <>
        <div id='main'  className='container-fluid' style = {{padding: 0,}}>
            <video className='videoTag' poster={image} autoPlay loop muted>
                <source src={sample} type='video/mp4'/>
            </video>
            <content className="container text-center">
                <h2>What Do You Know About Steam?</h2>
                <p>{content[0].textMain}</p>
            </content>
        </div>
        </>
    )
}
}

export default MainPage
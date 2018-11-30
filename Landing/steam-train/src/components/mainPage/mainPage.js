import React from 'react'
import sample from '../../static/video/MP4/Training.mp4';
import content from '../content/content'




const MainPage = () =>{
    // console.log(content[0].textMain);
    
    return(
        <div id='main'  className='container-fluid' style = {{padding: 0 ,}}>
            {/* <div className="video"> */}
                <video className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4'/>
                </video>
            {/* </div> */}
            <content className="container text-center">
                <h2>What Do You Know About Steam?</h2>
                <p>{content[0].textMain}</p>
            </content>
        </div>
    )
}


export default MainPage
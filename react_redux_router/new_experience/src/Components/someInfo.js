import React from 'react'

class SomeInfo extends React.Component{

    click = ()=>{
       this.props.getInfoFromApi('https://jsonplaceholder.typicode.com/photos')
    }

render(){
    // console.log(this.props)

    const { images } = this.props
    let imageCreate = images.map(image => {
        return (
            <div className= 'our-lovely-photo' key={image.id}>
            <img src={image.url} alt={image.title}/>
            </div>
        )
    })
        return(
    
            <div className="info-block">
                <h2>Hi, I"m info block</h2>
                <button onClick={this.click}>getData</button>
                {imageCreate}
            </div>
        )
    }

}

export default SomeInfo
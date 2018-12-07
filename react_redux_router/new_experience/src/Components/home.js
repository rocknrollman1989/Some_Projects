import React from 'react'
import axios from 'axios'

class Home extends React.Component{
    state = {
        posts: []
       }
       
        componentDidMount(){
          axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(dataBack => {
              // console.log("data", dataBack);
      
              this.setState({
                posts: dataBack.data.slice(0,4)
              })
            })
        }
render(){
    const {posts} = this.state;
    const postList = posts.length>=1?(posts.map(post=>{
        return(
            <div className='some-post' key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
              )
        })
    ):(<p>Ничего нет</p>);
        

    return(
            <div className="home-block">
                <h2>Hi, I"m home-block</h2>
                {postList}
            </div>
    )

    }
}
export default Home
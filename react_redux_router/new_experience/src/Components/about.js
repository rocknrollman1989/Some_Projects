import React from 'react'

class About extends React.Component{

handleDelete = (post) => {
    this.props.deletePost(post.id)
    // console.log(this.props.deletePost)
}

handleCreate = () =>{
    this.props.createPost({
        "postId": 1,
        "id": 4,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        })
    // console.log(this.props.createPost)
}

render(){

    const { posts } = this.props
    // console.log(this.props.createPost)
    const postToShow = posts.map( post=>{
        return(
            <div className='post-show-about' key={post.id} >
                <h2>{post.name}</h2>
                <h3>{post.email}</h3>
                <p>{post.body}</p>
                <button onClick={() =>this.handleDelete(post)} >Delete me!</button>
            </div>
        )
    })
        return(
            <div className="about-block">
                <h2>Hi, I"m about-block</h2>
                <button onClick={this.handleCreate}>Create ME!</button>
                {postToShow}

            </div>
        )
    }

}

export default About
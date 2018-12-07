import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
// import axios from 'axios'
import Header from './Components/header'
import Home from './Components/home'
import About from './Components/about'
import SomeInfo from './Components/someInfo'
import './App.css';
import { connect } from 'react-redux'
import { deletePost } from './actions/actions'
import { createPost} from './actions/actions'
import {getInfoFromApi} from './actions/actions'


class App extends Component {
 

render(){
  // console.log(this.props)
return(

  <BrowserRouter>
    <div className="body-block">
      <Header/>
      <Route exact path='/' component={Home}/>
      <Route path='/about' render={()=><About  {...this.props}/>}/>
      <Route path='/someInfo' render={()=><SomeInfo  {...this.props}/>}/>
    </div>
  </BrowserRouter>

    )
  }
}

const mapStateToProps = (state) =>{

  return {
    posts: state.posts,
    images: state.images
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    deletePost: (id) => {dispatch(deletePost(id))},
    createPost: (createDataPost) => {dispatch(createPost(createDataPost))},
    getInfoFromApi: (url) => {dispatch(getInfoFromApi(url))}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
// import { Redirect } from 'react-router';
import React from 'react'
import MainPage from './components/mainPage/mainPage'
import SliderPage from './components/sliderPage/sliderPage'
import UserInfoForm from './components/userInfoForm/userInfoForm'
import Schedule from './components/schedulePage/schedule'
import './index.css'
import Header from './components/header/header'


class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: '',
      name: '',
      email: '',
      firstName: '',
      lastName: '',
      userPlace: '',
    };

    this.loginInData=this.loginInData.bind(this)
    this.newInfoOnSubmit=this.newInfoOnSubmit.bind(this)
    this.logoutClearStorage=this.logoutClearStorage.bind(this)
  }

  componentDidMount(){
    if(localStorage.length<2){
      console.log('!!!');
      return
    }

    this.setState({
    ...this.state,
    isLoggedIn: true,
    name: localStorage.getItem(['name'])||'',
    email: localStorage.getItem(['email'])||'',
    firstName: localStorage.getItem(['firstName'])||'',
    lastName: localStorage.getItem(['lastName'])||'',
    userPlace: localStorage.getItem(['userPlace'])||'',
    })
  }
//Set login info
  loginInData = (inData)=>{
    
    console.log('Index.date',inData);
    localStorage.setItem("name", inData.name);
    localStorage.setItem("email", inData.email);
 
    this.setState({ 
      ...this.state, ...inData,
      isLoggedIn: !inData.isLoggedIn,
    })
    
  }
  // set another info from form
  newInfoOnSubmit = (newInfoData) =>{
    localStorage.setItem("firstName", newInfoData.firstName);
    localStorage.setItem("lastName", newInfoData.lastName);
    localStorage.setItem("userPlace", newInfoData.userPlace);
      this.setState({ 
        ...this.state, ...newInfoData,
      })
  }
  //clear storage' logout
  logoutClearStorage = () => {
    localStorage.clear();
    this.setState({isLoggedIn: !this.state.isLoggedIn,
      name:  '',
      email: '',
      firstName: '',
      lastName: '',
      userPlace: '',
  })
    // console.log('I clear!')

  }

  render() {
    console.log('Index.state',this.state);
    return (
      <div>
        <Header {...this.state} onSubmit={this.loginInData} onDeleteLogin={this.logoutClearStorage}/>
        <Switch>
          <Route exact path='/' render={() => (<MainPage {...this.state}/>)} />
          <Route path='/main' render={() => (<MainPage />)} />
          <Route path='/gallery' component={SliderPage} />
          <Route path='/someInfo' render={() => (<UserInfoForm OnSubmitNew={this.newInfoOnSubmit} {...this.state} />)} />
          <Route path='/Scheduleain' component={Schedule} />
         
        </Switch>
      </div>
    );
  }
};


ReactDOM.render((
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
), document.getElementById('root'))
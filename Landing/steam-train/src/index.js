
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router';
import React from 'react'
import Header from './components/header/header'
import MainPage from './components/mainPage/mainPage'
import SliderPage from './components/sliderPage/sliderPage'
import InfoBlock from './components/InfoBlock/infoBlock'
import Schedule from './components/schedulePage/schedule'
import './index.css'



class Loyaut extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            eMail: '',
            first: '',
            second: '',
            place: ''
        
    };
    this.ourInfo=this.ourInfo.bind(this)
}

ourInfo(value1, value2){
    this.setState({
        name : value1,
        eMail: value2
        // first: value3,
        // second: value4,
        // place: value5 
    });      

}

render(){


    return(

    <div>
                <Header  ourInfo={this.ourInfo}/>
                <Redirect to="/main"/>
                
                <Switch>
                    <Route  exact path='/main' component={MainPage}/>
                    <Route  path='/gallery' component={SliderPage}/>
                    <Route  path='/someInfo' component={InfoBlock}/>
                    <Route  path='/Scheduleain' component={Schedule}/>
                </Switch>     
    </div> 
        );
    }
};


ReactDOM.render((
    <BrowserRouter>
      <Loyaut/>
    </BrowserRouter>
), document.getElementById('root'))
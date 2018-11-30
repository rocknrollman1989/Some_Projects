
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



const Loyaut = () =>(  
        <div>
                <Header />
                <Redirect to="/main"/>
                
                <Switch>
                    <Route  exact path='/main' component={MainPage}/>
                    <Route  path='/gallery' component={SliderPage}/>
                    <Route  path='/someInfo' component={InfoBlock}/>
                    <Route  path='/Scheduleain' component={Schedule}/>
                </Switch>     
        </div>  
)

ReactDOM.render((
    <BrowserRouter>
      <Loyaut/>
    </BrowserRouter>
), document.getElementById('root'))

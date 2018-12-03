import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import ModalPopup from './modalPop'


class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      buttonOn: true,
      menuOpen: false,
      name: '',
      eMail: '',
      first: '',
      second: '',
      place: '',

    };
  
    this.ourLoginInfo = this.ourLoginInfo.bind(this);

  }


handleStateChange (state) {
  this.setState({menuOpen: state.isOpen})  
}
closeMenu () {
  this.setState({menuOpen: false})
}

toggleMenu () {
  this.setState({menuOpen: !this.state.menuOpen})
}
ourLoginInfo(value1 , value2){

  this.setState({name : value1,
                eMail: value2 });
  this.props.ourInfo(value1, value2);      

}
  render () {
   
    return (
      <header>
        <Menu 
          className='nav-menu'
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <p>{this.state.name}</p>
          <p>{this.state.eMail}</p>
          <p>{localStorage["first"]}</p>
          <p>{localStorage["second"]}</p>
          <p>{localStorage["place"]}</p>

          <ModalPopup ourLoginInfo={this.ourLoginInfo}/>

          <p><Link to='/main'>Main</Link></p>
          <p><Link to='/gallery'>Gallery</Link></p>
          <p><Link to='/someInfo'>SomeInfo</Link></p>
          <p><Link to='/Scheduleain'>Schedule</Link></p>
        </Menu>
        
      </header>
    );
  }
}

export default Header
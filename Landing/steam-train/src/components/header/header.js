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
    };
  
    // this.userLoginInfo = this.userLoginInfo.bind(this);
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

  render () {
    
    return (
      <header>
        <Menu 
          className='nav-menu'
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <p>{this.props.name}</p>
          <p>{this.props.email}</p>
          <p>{this.props.firstName}</p>
          <p>{this.props.lastName}</p>
          <p>{this.props.userPlace}</p>

          <ModalPopup {...this.props} />

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
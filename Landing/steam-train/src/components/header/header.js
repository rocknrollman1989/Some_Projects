import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import ModalPopup from './modalPop'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonOn: true,
      menuOpen: false,
      value: '',
      name: '',
      eMail: '',
      first: '',
      second: '',
      place: '',

    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

handleSubmit() {
  localStorage.clear()
  
  console.log(localStorage)
  // this.setState({buttonOn: false})
  // console.log(this.state.buttonOn)
  this.forceUpdate()
// ((localStorage["name"]===''||localStorage["name"]===undefined)?null:window.location.reload())
  
}
handleStateChange (state) {
  this.forceUpdate()
  this.setState({menuOpen: state.isOpen})  
}
closeMenu () {
  this.setState({menuOpen: false})
}

toggleMenu () {
  this.setState({menuOpen: !this.state.menuOpen})
}
  render () {
    const ButtonIn = () =>{
      return(
        <>
         {/* (this.state.buttonOn===true?<button onClick={this.handleSubmit}>Выход</button>:null) */}
        </>
      )
    }

    return (
      <header>
        <Menu 
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <p>{localStorage["name"]}</p>
          <p>{localStorage["eMail"]}</p>
          <p>{localStorage["first"]}</p>
          <p>{localStorage["second"]}</p>
          <p>{localStorage["place"]}</p>
          {/* <ButtonIn/> */}
          <button onClick={this.handleSubmit}>Выход</button>

          <ModalPopup/>

          <p><Link to='/main'>Main</Link></p>
          <p><Link to='/gallery'>Gallery</Link></p>
          <p><Link to='/someInfo'>SomeInfo</Link></p>
          <p><Link to='/Scheduleain'>Schedule</Link></p>
        </Menu>
        {/* <CustomIcon onClick={() => this.toggleMenu()} /> */}
      </header>
    );
  }
}

export default Header
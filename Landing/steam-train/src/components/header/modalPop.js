import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',

  }
};

Modal.setAppElement('#root')

class ModalPopup extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
    name:  '',
    email: '',
    firstName: '',
    lastName: '',
    userPlace: '',
    modalIsOpen: true,
    isLoggedIn: false

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.logOut=this.logOut.bind(this)
  }
  componentDidMount(){
    if(localStorage.length<2){
      console.log('!!!');
      return
    }

    this.setState({isLoggedIn: true,
      modalIsOpen: false})
  }
  handleChange(event) {
    const{ name, value } = event.target;
      
    this.setState({[name]: value});
  
  }
  
  openModal() {
    this.setState({modalIsOpen: true});
  }

  logOut(){
    
    this.setState({isLoggedIn: !this.state.isLoggedIn,
                    name:  '',
                    email: '',
                    firstName: '',
                    lastName: '',
                    userPlace: '',
                })
    this.props.onDeleteLogin();
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
    
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
  handleSubmit(event) {
    event.preventDefault()
    this.setState({modalIsOpen: false});
    this.setState({isLoggedIn: !this.state.isLoggedIn,
                    name: this.state.name,
                    email: this.state.email,})

    this.props.onSubmit(this.state);//send data to index.js

  }

  render() {
    // console.log('modal.state-del',this.state)
    return (
      <div id="popup">
      {this.state.isLoggedIn?
      <button onClick={this.logOut}>LOG OUT</button>
      :<button onClick={this.openModal}>LOG IN</button>}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

        <h2 ref={subtitle => this.subtitle = subtitle}>Hello Admin! Would you like to Enter?</h2>
        <form onSubmit={this.handleSubmit} >

        <button onClick={this.closeModal}>Not today</button>
        <label>
            NickName:
            <input type="text" value={this.state.name} name='name' onChange={this.handleChange}
                   placeholder={'NickName'} />
          </label>
          <label>
            E-mail:
            <input type="text" value={this.state.email} name='email' onChange={this.handleChange}
                   placeholder={'E-mail'} />
          </label>
          <input type="submit" value="Log in" />
        </form>
        </Modal>
           
      </div>
    );
  }
}

export default ModalPopup
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
    name: ''||(localStorage["name"]===undefined?'':localStorage["name"]),
    eMail: ''||(localStorage["eMail"]===undefined?'':localStorage["eMail"]),  
    modalIsOpen: true,
    login: 'LOG IN',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }
  handleChange(event) {
    const{
      name, value 
    } = event.target;
    this.setState({[name]: value});
  
  }
  
  openModal() {
    // this.forceUpdate()
    console.log(localStorage);
    this.setState({modalIsOpen: true});

  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
    
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
  handleSubmit() {
  
  localStorage.setItem("name", this.state.name);
  localStorage.setItem("eMail", this.state.eMail);


  console.log(localStorage);

  this.setState({modalIsOpen: false});
  
  }

  render() {
    
    return (
      <div id="popup">
      <button onClick={this.openModal}>{this.state.login}</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

        <h2 ref={subtitle => this.subtitle = subtitle}>Hello Admin! Would you like to Enter?</h2>
        <form onSubmit={this.handleSubmit} >
            <label>
            NickName:
            <input type="text" value={this.state.name} name='name' onChange={this.handleChange} placeholder={'NickName'}/>
            </label>
            <label>
            E-mail:
            <input type="text" value={this.state.eMail} name='eMail' onChange={this.handleChange} placeholder={'E-mail'} />
            </label>
            <input type="submit" value="Log in" />
          </form>
        <button onClick={this.closeModal}>Not today</button>
          
        </Modal>
           
      </div>
    );
  }
}

export default ModalPopup
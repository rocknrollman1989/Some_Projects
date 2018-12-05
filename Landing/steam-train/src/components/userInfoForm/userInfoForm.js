import React from 'react'
import ModalPopup from '../header/modalPop'

class UserInfoForm extends React.Component {
  constructor(props) {
    super(props);
    const {
      name,
      email,
      firstName,
      lastName,
      userPlace,
      isLoggedIn
    } = props;

    this.state = {
      name: name || '',
      email: email || '',
      firstName: firstName || '',
      lastName: lastName || '',
      userPlace: userPlace || '',
      isLoggedIn: isLoggedIn || !isLoggedIn
    };
    
    this.callOnSubmit=this.callOnSubmit.bind(this)
    this.updateFieldValue = this.updateFieldValue.bind(this)
  }

  componentDidUpdate(prevProps) {
    const {
      name,
      email,
      firstName,
      lastName,
      userPlace,
      isLoggedIn
    } = this.props;

    if (prevProps.name !== this.props.name) {
      this.setState({
        name,
        email,
        firstName,
        lastName,
        userPlace,
        isLoggedIn
      });
    }
  }

  updateFieldValue = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  callOnSubmit = (event) => {
    event.preventDefault()
    this.props.OnSubmitNew(this.state);

    return false
  };

  render(){
    if(this.props.isLoggedIn!==true){
      return(
        <>
         <div id="UserInfoForm">
         <h1>Пожалуйста войдите в систему!</h1>
         <ModalPopup/>
         </div>
        </>
      )
    }

    else return (
      <>
      <div id="UserInfoForm">
        <form onSubmit={this.callOnSubmit} id='form-info'>
          <label>
            NickName:
            <input type="text" value={this.state.name} name='name' onChange={this.updateFieldValue}
                   placeholder={'NickName'} />
          </label>
          <label>
            E-mail:
            <input type="text" value={this.state.email} name='email' onChange={this.updateFieldValue}
                   placeholder={'E-mail'} />
          </label>
          <label>
            FirstName:
            <input type="text" value={this.state.firstName} name='firstName' onChange={this.updateFieldValue}
                   placeholder={'FirstName'} />
          </label>
          <label>
            SecondName:
            <input type="text" value={this.state.lastName} name='lastName' onChange={this.updateFieldValue}
                   placeholder={'SecondName'} />
          </label>
          <label>
            Where Are You From?:
            <input type="text" value={this.state.userPlace} name='place' onChange={this.updateFieldValue}
                   placeholder={'Where Are You From?'} />
          </label>
          <input type="submit" value="Save my Indef" />
        </form>
      </div>
      </>
    );
  }
}


export default (UserInfoForm);
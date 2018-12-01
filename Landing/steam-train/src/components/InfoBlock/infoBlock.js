import React from 'react'
import ModalPopup from '../header/modalPop'
// import { Redirect } from 'react-router'


class InfoBlock extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
          value: '',
          name: ''||(localStorage["name"]===undefined?'':localStorage["name"]),
          eMail: ''||(localStorage["eMail"]===undefined?'':localStorage["eMail"]),
          first: ''||(localStorage["first"]===undefined?'':localStorage["first"]),
          second: ''||(localStorage["second"]===undefined?'':localStorage["second"]),
          place: ''||(localStorage["place"]===undefined?'':localStorage["place"])
          
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.olick = this.olick.bind(this);
      }
      olick(){
        console.log('!!!')

      }
      
      handleChange(event) {
        const{
          name, value 
        } = event.target;
        this.setState({[name]: value});
      
      }
      
      handleSubmit(event) {
      event.preventDefault();
        localStorage.setItem("name", this.state.name);
        localStorage.setItem("eMail", this.state.eMail);
        localStorage.setItem("first", this.state.first);
        localStorage.setItem("second", this.state.second);
        localStorage.setItem("place", this.state.place);
        
    
      console.log(localStorage)

        event.preventDefault();
    }
   
    

render(){
  
  const Info = () =>(

  <div id="infoBlock">
    
    <form onSubmit={this.handleSubmit} id='form-info' > 
            <label>
            NickName:
            <input type="text" value={this.state.name} name='name' onChange={this.handleChange} placeholder={'NickName'}/>
            </label>
            <label>
            E-mail:
            <input type="text" value={this.state.eMail} name='eMail' onChange={this.handleChange} placeholder={'E-mail'} />
            </label>
            <label> 
            FirstName:
            <input type="text" value={this.state.first} name='first' onChange={this.handleChange} placeholder={'FirstName'}/>
            </label>
            <label>
            SecondName:
            <input type="text" value={this.state.second} name='second' onChange={this.handleChange} placeholder={'SecondName'} />
            </label>
            <label>
            Where Are You From?:
            <input type="text" value={this.state.place} name='place' onChange={this.handleChange} placeholder={'Where Are You From?'} />
            </label>
            <input type="submit" value="Save my Indef" />
        </form>
    </div>
  )

  if(localStorage["name"]===''||localStorage["name"]===undefined&&localStorage["eMail"]===''||localStorage["eMail"]===undefined){
    return( 
        <div id='nothing'>
        <ModalPopup/>
       
      
      </div>
     )
  }
    else return(
      <>
      <Info/>
      </>
    )
  }
}

export default (InfoBlock)


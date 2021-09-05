import react from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//#region 
const myfirstelement = <h1>Hello React!</h1>

const name = "tomer abrashkin"
const user = {
  firstname: "tomer",
  lastname: "abrashkin"
};
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const presentme = (
  <h1>Hello, Mr. {user.firstname +" " + user.lastname} !</h1>
);

function clock(){
  const time_element = (
    <div>
      <h1>It is {new Date().getSeconds()}:{new Date().getMinutes()}:{new Date().getHours()} in israel</h1>
    </div>
  );
  ReactDOM.render(time_element,document.getElementById('root'));
}//there is a better way to execute this 

class Clock extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {date : new Date()};
  }
  componentDidMount(){ //invoked after the component output was rendered to DOM 
    this.timerID = setInterval( ()=> this.tick() , 1000);
  }
  componentWillUnmount(){ //invoked immediately before a component is unmounted and destroyed.
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date : new Date()
    });
  }
  render(){
    return (
      <div>
      <h1>It is {this.state.date.toLocaleTimeString()} .</h1>
      </div>
    )
  }
}

class Welcom extends React.Component{
  render(){
    return <h1>hi , {this.props.name}</h1>
  }
}

function Greeteveryone(){
  return (
    <div>
    <Welcom name="tomer" />
    <Welcom name="adi" />
    <Welcom name="idan" />
    </div>
  );
}
//#endregion


class Loginpage extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = ({
      username : "" ,
      password : "" ,
      showform : true
    });
    this.unameref = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({showform : this.state.showform ? false : true});
  } 
  handleChange(event)
  {
    if(event.target.name == 'iUsername')
    {
    this.setState({username : event.target.value});
    }else
    {
      this.setState({password : event.target.value});
    }
  }
  render(){
    if(this.state.showform == true){
    return <form onSubmit={this.handleSubmit}> 
        <div className="LogInPage">
      <Welcom name="Guest" />
        <label>Enter User Name: </label><br />
        <input type='text' name='iUsername' onChange={this.handleChange} /><br /> {/* option 1 for reaching inputed values */}
        <label>Enter Password: </label><br />
        <input type='password' name='iPassword' ref={this.unameref} /> {/* option 2 for reaching inputed values */}
      <br /><br />
        <input type='submit' />

      </div>
    </form>
    }else
    {
      return <div className="LoggedIn">
        <Welcom name={this.state.username} />
        <h1>dont tell anyone your password is {this.unameref.current.value}</h1>
        <button onClick={this.handleSubmit}>Log Out</button>
      </div>
    }
  }
}

// ReactDOM.render(myfirstelement,document.getElementById('root'));
// ReactDOM.render(presentme, document.getElementById('root'));
// ReactDOM.render(element, document.getElementById('root'));
// setInterval(clock,1000)
ReactDOM.render(<Loginpage />,document.getElementById('root'));

//ReactDOM.render(<Clock />,document.getElementById('root')); 
//the clock lifecycle is:
//call clock component, init the state with new clock
//call render() and dsiplay its return value on the DOM
//when finished displaying on DOM call componentdidmount()
//componentdidmount tells the browsed to call tick() every second
//when tick() changes the state.date react knows he needs to call render() again
//the cycle of tick()->change state->render() continues

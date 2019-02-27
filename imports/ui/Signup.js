import React from 'react';
import { Router, Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      error: ''
    };
  }
  HandleSubmit(e){
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Accounts.createUser({email,password}, (err) => {
      this.setState({error:err.reason});
      console.log('Signup error: ' + err.reason);
    })
  }

  render(){
    return (
        <div>
          <h1>Signup here!</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.HandleSubmit.bind(this)}>
            <input type='email' name='email' ref='email' placeholder='Email Address'></input>
            <input type='password' name='password' ref='password' placeholder='Password'></input>
            <button onClick={this.HandleSubmit.bind(this)}>Submit</button>
          </form>
          <Link to="/Login">Already Registered?</Link>
        </div>
    )
  };
}
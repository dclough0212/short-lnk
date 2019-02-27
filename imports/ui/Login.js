import React from 'react';
import Signup from './../ui/Signup';
import { Router, Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';


export default class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            error: ''
        };
    }

    handleClick(e) {
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
    
        console.log('Entered: ' + email + ':' + password);
        Meteor.loginWithPassword({email}, password, (err) => {
            console.log("Login response", err);
            if (err) {
                this.setState({
                    error: err.reason
                });
            }
        });
    }

    render(){
      return (
          <div>
            <h1>Login</h1>
            {this.state.error ? <p>{this.state.error}</p> : undefined}

            <form>
                <input type='email' name='email' ref='email' placeholder='Email Address'></input>
                <input type='password' name='password' ref='password' placeholder='Password'></input>
 
                <button onClick={this.handleClick.bind(this)}>Submit</button>
            </form>
            <div>
                <Link to='./signup'>Not Registered?</Link>
            </div>
          </div>

      )
    };
  }
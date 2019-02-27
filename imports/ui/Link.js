import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class Link extends React.Component {
  constructor(props){
    super(props);
  }
  logOut(){
    Meteor.logout((err) => {
      console.log("Logout", err);
    })
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newLink = this.refs.newlink.value;
  };
    render(){
      return (
          <p>
              <button onClick={this.logOut.bind(this)}>Logout</button>

              <p>Add LInk</p>
              <form onSubmit={this.onSubmit.bind(this)}>
                <input type='text' ref='newlink' placeholder='URL'></input>
                <button>Add Link</button>
              </form>
          </p>
      )
    };
  }
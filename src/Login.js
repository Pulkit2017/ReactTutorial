import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import './App.css';

export default function Login() {
  
  return(
    
    
    <form style={{
      backgroundColor: 'white',
        width: '100%',
        height: '80%'
       
    }}>
      <label className="text_label-color">
        <p>Username</p>
        <input type="text"  />
      </label>
      <label className="text_label-color">
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <AwesomeButton type="primary">Submit</AwesomeButton>
      </div>
    </form>
  )
}
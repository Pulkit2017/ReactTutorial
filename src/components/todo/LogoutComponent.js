import React, { Component } from "react";
import {

    useNavigate

} from "react-router-dom";




class LogoutComponent extends Component {
    render() {
      return (
  
       <>
       <h2>You are logged out</h2>
       <div className="container">
           Thank you for using Our Application
          </div>
       </>
  
  
      )
    }
}
  

  function LogoutComponentWithNavigate(props) {
    const navigate = useNavigate();

    return <LogoutComponent {...props} navigate={navigate} />
}

export default LogoutComponentWithNavigate

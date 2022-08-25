import React, { Component } from "react";
import {

    useNavigate,
    Link,

} from "react-router-dom";
import AuthenticationService from "./AuthenticationService";




class HeaderComponent extends Component {
    render() {

       const isUserLoggedin = AuthenticationService.isUserLoggedin()
       console.log(isUserLoggedin);
      return (
  
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
             <div><a href="http://www.google.com/search?q=%22Fish+Home%22" className="navbar-brand">FISH HOME</a></div>
            <ul className="navbar-nav">
            
            {isUserLoggedin && <li><Link className="nav-link" to='/welcome/Home'>Home</Link></li>}
            {isUserLoggedin && <li><Link className="nav-link" to="/todolist">Todos</Link></li>}
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
            {!isUserLoggedin && <li ><Link className="nav-link" to="/login">Login</Link></li>}
             {isUserLoggedin && <li > <Link className="nav-link" onClick={AuthenticationService.logout} to="/logout">Logout</Link></li>}
            </ul> 
  
          </nav>
  
        </header>
  
  
      )
    }
}
  

    function HeaderComponentWithNavigate(props) {
      const navigate = useNavigate();

      return <HeaderComponent {...props} navigate={navigate} />
  }

export default HeaderComponentWithNavigate

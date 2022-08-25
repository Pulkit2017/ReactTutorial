import React, { Component } from "react";
import LoginComponent from "./LoginComponent/LoginApp";
import WelcomeComponent from "./LoginComponent/WelcomeComponent"
import TodosListComponent from "./LoginComponent/TodosListComponent"
import HeaderComponent from "./HeaderComponent"
import LogoutComponent from "./LogoutComponent"
import FooterComponent from "./FooterComponent"

import AuthenticatedRoute from "./AuthenticationRoute";



import {
  BrowserRouter,
  
  Routes,
  Route

} from "react-router-dom";


import './TodoApp.css'


class TodoApp extends Component {
  render() {
    return (


      <div className="todoApp">
        {/* <h1 style={{backgroundColor:"#81bbba"}}>Fish Home</h1> */}

        
        <BrowserRouter>
        <HeaderComponent></HeaderComponent>
          <Routes>

            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/welcome/:name" element={
           <AuthenticatedRoute>
            <WelcomeComponent />
            </AuthenticatedRoute>
                                                } /> 
            {/* <AuthenticatedRoute path="/welcome/:name" element={<AuthenticatedRoute />}>
                            <Route path="/welcome/:name" element={<WelcomeComponent />}/>
                        </AuthenticatedRoute> */}
          
            {/* <Route exact path="/welcome/:name" element={<AuthenticationRoute></AuthenticationRoute>}></Route>
            <AuthenticationRoute path="/welcome/:name" element={<WelcomeComponent />} /> */}
            <Route path="/todolist" element={<TodosListComponent />} />
     
            <Route path="/logout" element={<LogoutComponent />} />
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent></FooterComponent>
        </BrowserRouter>
    
        {/* <LoginComponent />
                      <WelcomeComponent /> */}
      </div>


    )
  }
}
class ErrorComponent extends Component {
  render() {
    return (


      <div >
        {/* <h1 style={{backgroundColor:"#81bbba"}}>Fish Home</h1> */}
        <h2>Error - Please try again after some time</h2>


      </div>


    )
  }
}


export default TodoApp



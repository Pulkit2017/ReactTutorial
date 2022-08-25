import React, {Component} from "react";

import '../TodoApp.css';
import {
   
    useNavigate
  
  } from "react-router-dom";
import AuthenticationService from "../AuthenticationService";



class LoginComponent extends Component
{
    
    constructor(props) {
        
        super(props)
        this.state =
        {
            username: '',
            password:'',
            hasLoginFailed : false,
            errorMessageUsername : '',
            errorMessagePassword : ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
      
    }
    handleChange(event)
    {
        console.log(this.state);

        
        this.setState({[event.target.name]:event.target.value})
    }
    loginClicked()
   {
    
    this.setState({errorMessageUsername : '',errorMessagePassword : '',hasLoginFailed : false})  
    
       if(this.state.username==='' && this.state.password==='')
       {
      
        this.setState({errorMessageUsername : 'Empty username',hasLoginFailed : true})  
       
       }

       if(this.state.password==='')
       {
      
        this.setState({errorMessagePassword : 'Empty username',hasLoginFailed : true})  
       
       }

       if(this.state.username==='')
       {
           console.log("1")
        this.setState({errorMessageUsername : 'Empty username',hasLoginFailed : true})    
       }

       if(this.state.password==='')
       {
        console.log("2")
        this.setState({errorMessagePassword : 'Empty password',hasLoginFailed : true})  
       }
       if(this.state.username !== 'pulkit')
       {
        console.log("3")
        this.setState({errorMessageUsername : "Incorrect username",hasLoginFailed : true}) 
        console.log(this.state.errorMessagePassword)
        console.log(this.state.errorMessageUsername)

         
       
       }
       if(this.state.password !== 'singh')
       {
        console.log("4")
           this.setState({errorMessagePassword : 'Incorrect password',hasLoginFailed : true})  
       }
       if(this.state.username === 'pulkit' && this.state.password === 'singh')
       {
        console.log(React.version);
        //console.log("100")
       // useNavigate()("/welcome")
       AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
       this.props.navigate(`/welcome/${this.state.username}`)
       this.setState({hasLoginFailed : false}) 
       }


   }



    render()
    {
        return (
        <div>
            <h1>LOGIN</h1>
            <div className="TextField">UserName : <input  placeholder="Enter username" type="text" name="username" value={this.state.username} onChange={this.handleChange}/></div>
            <Showvalidatemessage hasLoginFailed={this.state.hasLoginFailed} errorMessagePassword={this.state.errorMessagePassword}errorMessageUsername={this.state.errorMessageUsername}/>
            {/* {this.state.hasLoginFailed && <div>{this.state.errorMessagePassword}{this.state.errorMessageUsername}</div>}*/}
            <div className="TextField">Password : <input  placeholder="Enter password" type="password" name="password" value={this.state.password} onChange={this.handleChange} /></div> 
            <button className="btn btn-success" onClick={this.loginClicked}>Login</button>

         </div>
        );
    }
}

    function Showvalidatemessage(props)
    {
         
         console.log(props.hasLoginFailed)
        if(props.hasLoginFailed)
        {
            console.log('1234')
            if(props.errorMessagePassword!=='' && props.errorMessagePassword!==''){return (<div><div>{props.errorMessagePassword}</div> <div>{props.errorMessageUsername}</div></div>)}
            if(props.errorMessagePassword!==''){return (<div>{props.errorMessagePassword}</div>)}
            if(props.errorMessageUsername!==''){return (<div>{props.errorMessageUsername}</div>)}
           
            return
        }
        else{
       
            return (<div>Password  matched</div>)
        }
        
    }

    
    // class TodoApp extends Component {
    //     render() {
    //       return (
    //         <div className="todoApp">
    //           <h1>TODO Management</h1>
    //           <Router>
    //               <Routes>
    //                   <Route path="/" element={<LoginComponent />}/>
    //                   <Route path="/login" element={<LoginComponent />}/>
    //                   <Route path="/welcome/*" element={<WelcomeComponent />}/>
    //                   <Route path="*" element={ <ErrorComponent /> } />
    //               </Routes>
    //           </Router>
    //           {/* <LoginComponent />
    //           <WelcomeComponent /> */}
    //         </div>
    //       );
    //     }
    // }

    function LoginComponentWithNavigate(props) {
        const navigate = useNavigate();

        return <LoginComponent {...props} navigate={navigate} />
    }

    export default LoginComponentWithNavigate
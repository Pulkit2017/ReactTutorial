import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
//import { Route, Redirect } from 'react-router-dom' //REACT-5
import AuthenticationService from './AuthenticationService'
 
class AuthenticatedRoute extends Component {

    render() {
        
       
        if (AuthenticationService.isUserLoggedin()) {
            console.log('check3')
           console.log(AuthenticationService.isUserLoggedin())
            return {...this.props.children}
            //return <Route {...this.props} /> //REACT-5
        } else {
            console.log('check12')
            console.log(AuthenticationService.isUserLoggedin())
            return <Navigate to="/login"  replace={true}  /> 
            //return <Redirect to="/login" /> //REACT-5
        }
    }
}
 export default AuthenticatedRoute

// function AuthenticatedRouteWithNavigate(props) {
//     const navigate = useNavigate();

//     return <AuthenticatedRoute {...props} navigate={navigate} />
// }
// export default AuthenticatedRouteWithNavigate


class AuthenticationService {
   registerSuccessfulLogin(username,password)
   {
       console.log('registerSuccessfulLogin')
       sessionStorage.setItem('authenricatedUser',username)
   }
   logout()
   {
       console.log('removed')
       sessionStorage.removeItem('authenricatedUser');
   }
   isUserLoggedin()
{
    let user = sessionStorage.getItem('authenricatedUser')
    console.log(user)
    console.log('authenticated12')
    if(user===null)
    {return false}

    return true

    
}


}
  

export default new AuthenticationService()

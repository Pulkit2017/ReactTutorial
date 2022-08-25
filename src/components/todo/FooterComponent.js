import React, { Component } from "react";
import {

    useNavigate
 

} from "react-router-dom";




class FooterComponent extends Component {
    render() {
      return (
  
        <footer>
            <span className="text-muted">@All Rights Reserved 2022</span>
      
        </footer>
  
  
      )
    }
}
  

  function FooterComponentWithNavigate(props) {
    const navigate = useNavigate();

    return <FooterComponent {...props} navigate={navigate} />
}

export default FooterComponentWithNavigate

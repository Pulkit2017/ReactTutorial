
import React, { Component } from "react";
import HelloWorldService from "../../../api/todo/HelloWorldService.js";
import {

    useNavigate,
    useParams,
    Link,

} from "react-router-dom";

class WelcomeComponent extends Component {

    constructor(props) {

        super(props)
        this.retreiveWelcomeMessage = this.retreiveWelcomeMessage.bind(this);
        
        this.state = {
            welcomeMessage : ''
        }
         this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);

        this.Goback1 = this.Goback1.bind(this);
       
    }
    handleSuccessfulResponse(response)
    {
        //console.log(response)
        this.setState({welcomeMessage:  response.data.message})
    }
    retreiveWelcomeMessage()
    {
        let params = useParams();
     HelloWorldService.executeHelloWorldBeanPathVariableService(params.name)
     .then(response => this.handleSuccessfulResponse(response))
    }
 
    Goback1() {
        this.props.navigate(-1)
        console.log("Called")
    }

    render() {

        return (
            <div    >     
            <div style={{ backgroundColor: "",width : '100%',height:'100%',padding:'1%'}}></div>              
            <div>
                
            <h1>Welcome</h1>
            <div style={{ backgroundColor: "",width : '100%',height:'100%',padding:'1%'}}></div>
                <ParamsCalled></ParamsCalled>
                <div style={{ backgroundColor: "",width : '100%',height:'100%',padding:'1%'}}></div>
                
                <button onClick={this.Goback1}>Welcome</button>

            </div>
            <div className="container">
                <button onClick={this.retreiveWelcomeMessage} className = "btn btn-success">Get Welcome message</button>
                 
            </div>
            <div className="container">
                {this.state.welcomeMessage}
                
            </div>
            </div>
        );
    }


}

function ParamsCalled() {
    let params = useParams();
    return <div>Welcome {params.name}
        <Link to="/todolist">Todo List</Link>

    </div>


}
function WelcomeComponentWithNavigate(props) {
    const navigate = useNavigate();

    return <WelcomeComponent {...props} navigate={navigate} />
}

export default WelcomeComponentWithNavigate

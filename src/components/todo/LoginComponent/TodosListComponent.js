
import React, {Component} from "react";
import {
   
    useNavigate
  
  } from "react-router-dom";

class TodosListComponent extends Component
{
 
    constructor(props) {
        
        super(props)
        this.state = {
            todos: 
            [
                {id: 1,description:'Learn 1',done:false,targetDate:new Date()},
                {id: 2,description:'Learn 2',done:false,targetDate:new Date()},
                {id: 2,description:'Learn 3',done:false,targetDate:new Date()},
            ]
        } 
        }

    render()
    {
        
        return (
            <div >
              <h1>List Todos</h1>
        
              <div className="div1"><TodoListTable todos={this.state.todos}></TodoListTable></div>
            
               </div>
        );
    }
   
    
}
function TodoListTable(props)
{

    return  (<table>
    <thead>
    <th>Id</th>
    <th>Description</th>
    <th>Is Complete</th>
    <th>Target Date</th>
    </thead>
    <tbody>
    {
      props.todos.map (
          todo =>
          <tr>
              <td>{todo.id}</td>
              <td>{todo.description}</td>
              <td>{todo.done.toString()}</td>
              <td>{todo.targetDate.toString()}</td>
              </tr>
       )
      
    }
    </tbody>

</table>
    )

}

function TodosListComponentWithNavigate(props) {
    const navigate = useNavigate();

    return <TodosListComponent {...props} navigate={navigate} />
}

export default TodosListComponentWithNavigate

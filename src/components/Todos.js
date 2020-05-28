import React ,{useContext} from "react"
import {ListGroup, ListGroupItem} from "reactstrap";
import {FaFlagCheckered } from "react-icons/fa";
import {TodoContext} from "../contexts/TodoContext";
import {REMOVE_TODO} from "../contexts/action.types";

const Todos =()=>{
    const {todos,dispatch} =useContext(TodoContext);
    return (
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(todo =>(
                <ListGroupItem key ={todo.id}>
                    {todo.todoString}
                    <span 
                    className="float-right"
                    onClick ={() => {
                        dispatch({
                            type: REMOVE_TODO,
                            payload :todo.id
                        })
                    }}
                    
                    >
                        <FaFlagCheckered/>
                    </span>

                </ListGroupItem>
            ))}
        </ListGroup>

    );
};

export default Todos;
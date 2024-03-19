import JavaScript from "./JavaScript";
import Classes from "./Classes";
import React from "react";
import PathParameters from "./routing/PathParameters";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./HighLight";
import Add from "./Add";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";
import { LabState } from "../store";
function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);

 return (
   <div>
     <h1>Assignment 3</h1>
     <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
     <ConditionalOutput />
     <Styles />
     <Classes/>
     <PathParameters/>
     <JavaScript/>
     <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil re
     </Highlight>
     <Add a={3} b={4} />
     <TodoItem />
     <TodoList />
   </div>
);}

export default Assignment3;

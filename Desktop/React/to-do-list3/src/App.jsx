import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import Input from "./component/Input";
import Todo from "./component/Todo";


function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "리엑트 공부",
      contents: "강의 듣기",
      isDone: false,
    },
    {
      id: uuid(),
      title: "js 공부",
      contents: "강의 듣기",
      isDone: true,
    },
    {
      id: uuid(),
      title: "css 공부",
      contents: "강의 듣기",
      isDone: false,
    },
  ]);

 

  return (
    <div>
      <header>
       <Input todos ={todos} setTodos={setTodos} />      
      </header>
      <body className="body">
       <Todo todos ={todos} setTodos={setTodos} ListIsDone ={false} cancleDone ={false} />
       <Todo todos ={todos} setTodos={setTodos} ListIsDone ={true} cancleDone ={true}/>
      </body>
    </div>
  );
}

export default App;

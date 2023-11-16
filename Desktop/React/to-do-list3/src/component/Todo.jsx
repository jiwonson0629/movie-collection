import React from 'react'
import Btn from './Btn'

function Todo({todos, setTodos, ListIsDone, cancleDone}) {

  const toggleBtn = (todo)=>{
    const newIsDone = todos.map((item)=>{
      if(item.id===todo.id){
        return {...item, isDone : !item.isDone }
      } else{
        return item
      }
    })
    setTodos(newIsDone)
  }
  const removeBtn = (todo)=>{
    const newTodos = todos.filter((item)=>{
      console.log(item, todo)
      return item.id !== todo.id
    })
    setTodos(newTodos);
  }


  return (
    <div> 
    <h3> {ListIsDone ? '완료목록':'할일목록'}</h3>
    {todos
      .filter((item) => {
        return item.isDone === ListIsDone;
      })
      .map((todo) => {
        return (
          <div 
          className="box"
          key={todos.id}>
          
            <h3>{todo.title}</h3>
            <p>{todo.contents}</p>
         
            {/* 완료/삭제 버튼 */}
            <Btn BtnFunc={toggleBtn} todo={todo}> {cancleDone ? '취소':'완료'} </Btn>
            <Btn BtnFunc={removeBtn} todo={todo}> 삭제 </Btn>
             </div>
        );
      })}

    </div>
  )
}

export default Todo
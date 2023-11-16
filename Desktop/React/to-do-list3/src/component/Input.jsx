import React,{useState} from 'react'
import uuid from 'react-uuid';

function Input({todos, setTodos}) {
  const [title,setTitle] =useState('');
  const [contents,setContents] = useState('');
  return (
    <div> <form onSubmit={(event)=>{
        event.preventDefault();
        const newTodo ={
          id :uuid,
          title : title,
          contents : contents,
          isDone : false ,
        }
        setTodos([...todos, newTodo])
        setTitle('');
        setContents('');
      }}>
        제목: <input 
            value={title}
            // value에는 input로 들어오는 값이 무엇인지 기입.
            onChange={(event)=>{
              setTitle(event.target.value)
            }}/> &nbsp; 
        할일: <input 
        value={contents}
        // value에는 input로 들어오는 값이 무엇인지 기입.
        onChange={(event)=>{
          setContents(event.target.value)}}/> &nbsp;
        <button>입력하기</button> 
      </form></div>
  )
}

export default Input
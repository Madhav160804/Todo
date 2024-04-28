import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

import './App.css'


// infinite loop here because everytime setTodos happens -> the component re renders
// So we use UseEffect hook
function App() {
  const [todos,setTodos] = useState([]);
  const data = fetch("http://localhost:3001/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
    })
    .catch(function (err) {
      console.log("Not able to fetch the data");
    })
  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  )
}

export default App 

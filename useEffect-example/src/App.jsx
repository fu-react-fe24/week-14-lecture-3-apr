import { useState, useEffect } from 'react'

function App() {
  const url = 'https://jsonplaceholder.typicode.com/todos';


  return (
    <div className="app">
      <ul>
        {
          todos.map(todo => <li key={todo.id}>{todo.title}</li>)
        }
      </ul>
      <button onClick={handleClick}>ÖKA</button>
    </div>
  )
}

export default App;

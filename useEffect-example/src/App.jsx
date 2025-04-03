import { useState, useEffect } from 'react'

function App() {
  const [counter, setCounter] = useState(0);
  const url = 'https://jsonplaceholder.typicode.com/todos';

  useEffect(() => {
    console.log('Jag körs när komponenten laddas första gången');
  }, []);

  useEffect(() => {
    console.log('Jag körs varje gång counter uppdateras, counter är nu', counter);
  }, [counter]);

  return (
    <div className="app">
      <button onClick={() => setCounter(c => c + 1)}>ÖKA</button>
    </div>
  )
}

export default App;

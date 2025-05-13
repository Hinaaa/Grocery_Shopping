import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")
    useEffect(() => {
        fetch("http://localhost:8080/api/hello")
            .then((res) => res.text())
            .then(data=>setMessage(data))
            .catch(error => console.error('Error fetching hello:', error));
    }, []);

  return (
    <>
        <h1>{message}</h1>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import ListCharacters from './components/listCharacters'

function App() {
  const [data, setDate] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const data = await response.json()
      setDate(data.results)
    }
    fetchData()
  }, [])

  return (
    <main className='main'>
      <div className='contentTitle'>
        <h1 className='titleMain'>The Rick and Morty API</h1>
      </div>
      <ListCharacters list={data} />
      <footer className='footer'>
        <b>Consumindo a API rick and morty, com React.</b>
        <p>
          Desenvolvido por
          <a href="https://github.com/yureribeiro" target="_blank">Yure Ribeiro</a>
        </p>
      </footer>
    </main>
  )
}

export default App

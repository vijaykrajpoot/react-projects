import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const [person, setPerson] = useState(data)
  console.log(person)
  return (
    <>
      <main>
        <section className='container'>
          <h3>{person.length} person(s)have their birthday today!!!</h3>
          <List person={person}></List>
          <button className='btn' onClick={() => setPerson([])}>
            clear
          </button>
        </section>
      </main>
    </>
  )
}

export default App

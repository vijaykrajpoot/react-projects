import React from 'react'

const List = ({ person }) => {
  return (
    <>
      {person.map((person) => {
        const { id, name, age, image } = person
        return (
          <article key={person.id} className='person'>
            <img src={person.image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        )
      })}
    </>
  )
}
export default List

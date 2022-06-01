import React from 'react'
import Form from './Form'


function DogCard({name, image, sex, age, breed }) {
  return (
    <div>
        <h3>{name}</h3>
        <p>{sex}</p>
        <p>{age}</p>
        <p>{breed}</p>

    </div>
  )
}

export default DogCard
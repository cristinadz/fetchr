import React, {useState, useEffect} from 'react'
import DogCard from './DogCard'


function DogContainer() {

    const [dogs, setDogs] = useState([])

    useEffect(() => {
        fetch ('http://localhost:3000/dogs')
        .then (resp => resp.json())
        .then ( setDogs )
    },[])

    const dogDisplay = dogs.map((dog) => <DogCard {...dog} key={dog.id} />)
  return (
    <div>
        {dogDisplay}
    </div>
  )
}

export default DogContainer
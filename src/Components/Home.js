import React, { useEffect, useState } from "react";
import DogContainer from "./DogContainer";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Favorites from "./Favorites";

function Home() {
  const [dogs, setDogs] = useState([]);
  // const [filter, setFilter] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/dogs")
      .then((resp) => resp.json())
      .then(setDogs);
  }, []);
// do I need to write a function for every single filter? 
  function ageFilter(value) {
    const filteredDogs = dogs.filter((dog) => {
      return dog.age === value;
    });
    setDogs(filteredDogs);
  }

   function sexFilter(value) {
     const filteredSex = dogs.filter((dog) => {
       return dog.sex === value;
     });
     setDogs(filteredSex);
   }

  return (
    <div>
      <Sidebar ageFilter = {ageFilter} sexFilter = {sexFilter} />
      <DogContainer dogs={dogs} />
    </div>
  );
}

export default Home;

import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList(  {setPlantList, plantList, filterInput }) {

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => setPlantList(data))
  }, [])

  const plantsToDisplay = plantList.filter (plant => {
    if(filterInput !== "") {
      return plant.name.toLowerCase().includes(filterInput.toLowerCase())
    } else {
      return true
    }
   })

  return (
    <ul className="cards">
      { plantsToDisplay.map(plant => { return <PlantCard key={plant.name}plantData={plant}/>}) }
    </ul>
  );
}

export default PlantList;


import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList(  {setPlantList, plantList }) {

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => setPlantList(data))
  }, [])

  const plantsToDisplay = plantList.filter (plant => {return true})

  return (
    <ul className="cards">
      { plantsToDisplay.map(plant => { return <PlantCard key={plant.name}plantData={plant}/>}) }
      {/* render PlantCards components in here */}
    </ul>
  );
}

export default PlantList;

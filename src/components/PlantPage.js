import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([])

  function handleSetPlantList(plants) {
    setPlantList(plants)
  }
  
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList setPlantList={handleSetPlantList} plantList={plantList}/>
    </main>
  );
}

export default PlantPage;

import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([])
  const [searchInput, setSearchInput] = useState("")

  function searchInputChange(event) {
    setSearchInput(event.target.value)
  }

  function handleSetPlantList(plants) {
    setPlantList(plants)
  }

  function addNewPlant(newPlant) {
    setPlantList([...plantList,newPlant])
  }

  return (
    <main>
      <NewPlantForm onAddNewPlant={addNewPlant}/>
      <Search onSearchInput={searchInputChange}/>
      <PlantList setPlantList={handleSetPlantList} plantList={plantList} filterInput={searchInput} />
    </main>
  );
}

export default PlantPage;

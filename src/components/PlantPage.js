import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(fetchPlants, []);

  function fetchPlants() {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((plantsData) => setPlants(plantsData));
  }

  const displayPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search setSearch={setSearch} />
      <PlantList plants={displayPlants} />
    </main>
  );
}

export default PlantPage;
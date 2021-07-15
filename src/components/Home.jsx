import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import React from 'react';
import { BASE_URL, headers } from "../services";

export default function Home() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(BASE_URL, { headers });
    console.log(res.data.records);
    setPlants(res.data.records);
  };

  return (
    <div>
      {plants.map((plant) => {
        return (
          <Link to={`/plants/${plant.id}`} key={plant.id}>
            <h2>{plant.fields.userName}</h2>
            <h2>{plant.fields.plantName}</h2>
            <p>{plant.fields.plantLocation}</p>
            <img src={plant.fields.image} alt={plant.fields.name} />
            <p>{plant.fields.plantDescription}</p>
          </Link>
        );
      })}
    </div>
  );
}





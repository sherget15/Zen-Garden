import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { BASE_URL, headers } from "../services";
import "./Home.css";

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
    <div className='card-container'>
      {plants.map((plant) => {
        return (
          <div className='card-spacing'>
            <div className='card'
              style={{
                backgroundImage: `url("${plant.fields.plantImage}")`,
                backgroundSize: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }} >
              < h3 > {plant.fields.plantName}</h3>
              <p>{plant.fields.plantLocation}</p>
              <p>{plant.fields.plantDescription}</p>
              <p>{plant.fields.userName}</p>
            </div>
          </div>
        );
      })}
    </div >
  );
}





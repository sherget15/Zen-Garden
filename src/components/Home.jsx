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
                // backgroundImage: "url(https://cdn.shopify.com/s/files/1/2719/1640/products/03dab051c61960236827063d4282c73a_medium.jpg?v=1581703782)",
                // height: "300px",
                backgroundImage: `url("${plant.fields.plantImage}")`,
                backgroundSize: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }} >
              {/* <Link to={`/plants/${plant.id}`} key={plant.id}> */}
              < h3 > {plant.fields.plantName}</h3>
              <p>{plant.fields.plantLocation}</p>
              {/* <img className='card-image' src={plant.fields.plantImage} alt={plant.fields.name} /> */}
              <p>{plant.fields.plantDescription}</p>
              <p>{plant.fields.userName}</p>
              {/* </Link> */}
            </div>
          </div>
        );
      })}
    </div >
  );
}





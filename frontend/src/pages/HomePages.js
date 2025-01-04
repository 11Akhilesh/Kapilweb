// /frontend/src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { getClothes } from '../api/clothes';

const HomePage = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const fetchClothes = async () => {
      const { data } = await getClothes();
      setClothes(data);
    };
    fetchClothes();
  }, []);

  return (
    <div>
      <h1>Formal Clothes</h1>
      <div className="grid">
        {clothes.map((item) => (
          <div key={item._id}>
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

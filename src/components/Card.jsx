
import React, { useState, useEffect } from "react";

function Card() {
    //https://makeup-api.herokuapp.com/api/v1/products.json?product_category=cream&product_type=foundation
  const url = "";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="grid md:grid-cols-4 
    md:justify-around justify-center py-6 px-10 gap-10">
    {data.map((data) => {
        return (
          <div className="flex justify-center border py-10 px-5">
            <div className="h-96">
                <img className="w-60" src={data.image_link} alt="img" />
                <h1 className="text-xl font-md">{data.name}</h1>
                <h1 className="text-xl font-md">{data.rating}</h1>
                <h1 className="text-xl font-md">{}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
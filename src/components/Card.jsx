import React, { useState, useEffect } from "react";

function Card() {

  const ApiKey='https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(ApiKey)
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
            <div className="h-[400px]">
                <img className="w-52" src={data.image_link} alt="img" />
                <div className="h-16">
                    <h1 className="text-xl font-md">{data.name}</h1>
                    <h1 className="text-xl font-md">{data.rating}</h1>
                </div>
                <div className="flex justify-center mt-10">
                    <button className=" bg-black px-4 py-2 rounded-md text-white">Add to Card</button>
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
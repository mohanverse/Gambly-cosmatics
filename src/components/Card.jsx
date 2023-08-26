import React from "react";

const Card = (props) => {
  return (
    <div className="flex justify-center border py-10 px-5">
      <div className="h-[400px]">
          <img className="w-52 ml-10" src={props.image} alt="img" />
          <div className="h-16">
              <h1 className="text-xl font-md">{props.name}</h1>
              <h1 className="text-xl font-md">{props.description}</h1>
          </div>
          <div className="flex justify-center mt-10">
              <button className=" bg-black px-4 py-2 rounded-md text-white">Add to Card</button>
          </div>
      </div>
    </div>
  );
}

export default Card;
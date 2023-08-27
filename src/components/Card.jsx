import React from "react";

const Card = (props) => {
  return (
    <>
    <div className="border p-2">
        <div className="space-y-6">
            <div>
                <img className="w-[400px] h-[300px]" src={props.image}alt="" />
            </div>
            <div className="space-y-2">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </div>
            <div className="flex justify-center mt-4">
                <button className="px-4 py-2 rounded-md text-white bg-black ">add Card</button>
            </div>

        </div>
    </div>
    </>
  );
}

export default Card;
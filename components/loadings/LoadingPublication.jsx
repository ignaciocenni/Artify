import React from "react";

function LoadingPublication() {
  return (
    <div className="flex w-full gap-4">
      {" "}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className=" w-96 object-cover flex flex-col justify-center items-start pb-3 my-2 mx-2 rounded-3xl shadow-sm animate-pulse">
          <div className="relative h-80 w-full bg-purple-300 rounded-3xl"></div>{" "}
          <div className="px-2 w-full">
            <div className="h-4 bg-purple-300 rounded mt-2"></div>{" "}
            <div className="h-6 bg-purple-300 rounded mt-2"></div>{" "}
            <div className="flex items-center mt-2">
              {" "}
              <div className="h-5 w-5 bg-purple-300 rounded-full"></div>{" "}
              <div className="h-4 bg-purple-300 rounded w-3/4 ml-2"></div>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoadingPublication;

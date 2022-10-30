import React from "react";
import { Link } from "react-router-dom";
export const MainSection = () => {
  return (
    <div className="flex  justify-center flex-col bg-lightblue">
      <div className="flex mx-auto p-5 mt-10">
        <div className="text ">
          <p className="m-7 text-5xl font-semibold">Learn to code - for free</p>
          <p className="m-7 text-5xl font-semibold">Build projects</p>
          <p className="m-7 text-5xl font-semibold">Earn certifications.</p>
        </div>
      </div>

      <div className="flex mx-auto flex-col h-screen">
        <div className="text-xl font-medium my-3 mb-5">
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten{" "}
          <br></br>
          jobs at tech companies including:
        </div>
        <div className="flex justify-between ">
          <a
            href="https://www.freepnglogos.com/pics/png-apple-logo"
            title="Image from freepnglogos.com"
          >
            <img
              src="https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png"
              width="40"
              alt="file apple logo black svg wikimedia commons"
            />
          </a>
          <a
            href="https://www.freepnglogos.com/pics/google-logo-history-png"
            title="Image from freepnglogos.com"
          >
            <img
              src="https://www.freepnglogos.com/uploads/new-google-logo-png-0.png"
              width="100"
              className="mt-2"
              alt="new google logo png"
            />
          </a>
          <a
            href="https://www.freepnglogos.com/pics/microsoft-logo-png"
            title="Image from freepnglogos.com"
          >
            <img
              src="https://www.freepnglogos.com/uploads/microsoft-logo-4.png"
              width="200"
              alt="microsoft logo"
              className="-mt-5"
            />
          </a>
          <a
            href="https://www.freepnglogos.com/pics/spotify-logo-png"
            title="Image from freepnglogos.com"
          >
            <img
              src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"
              width="50"
              alt="spotify icon marilyn scott"
            />
          </a>
          <a
            href="https://www.freepnglogos.com/pics/amazon-png-logo-vector"
            title="Image from freepnglogos.com"
          >
            <img
              src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png"
              width="100"
              alt="woodland gardening amazon png logo vector"
              className="mt-3"
            />
          </a>
        </div>
        <div className="flex justify-center">
          <Link to="/signin">
            <button className="p-2 px-10  mx-36 hover:bg-yellow-500 border-2 border-yellow-500  bg-yellow-400 text-gray-800 text-2xl">
              Get Started ( it's free )
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

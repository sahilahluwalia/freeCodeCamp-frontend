import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const { signin } = props;
  const navigate = useNavigate();
  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };
  return (
    <div className="flex justify-between bg-blue-900 ">
      <div className="my-auto pl-10 ">
        <div className="searchbar flex">
          <svg  className="h-5 mt-[1px] z-10 pl-3"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
          </svg>
          <input
            type="text"
            className="rounded relative right-6 pl-8 bg-gray-500 placeholder-gray-200"
            placeholder="Search 8000+ tutorials"
          />
        </div>
      </div>
      <div className="text-white p-3 text-xl font-medium">freeCodeCamp</div>
      <div className="my-auto flex ">
        {!signin && (
          <>
            <Link to="/signin">
              <button className="border-2 border-yellow-500 p-1 flex hover:bg-yellow-500 mr-10 bg-yellow-400 text-gray-800">
                Sign in
              </button>
            </Link>
            <Link to="/signup">
              <button className="border-2 border-yellow-500 p-1 flex hover:bg-yellow-500 mr-10 bg-yellow-400 text-gray-800">
                Sign up
              </button>
            </Link>
          </>
        )}
        {signin && (
          <>
            <Link to="/user">
              <button className="border-2 border-yellow-500 p-1 flex hover:bg-yellow-500 mr-10 bg-yellow-400 text-gray-800">
                Menu
              </button>
            </Link>

            <button
              onClick={signout}
              className="border-2 border-yellow-500 p-1 flex hover:bg-yellow-500 mr-10 bg-yellow-400 text-gray-800"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

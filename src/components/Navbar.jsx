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
        
        <input
          type="text"
          className="rounded pl-4 bg-gray-500 placeholder-gray-200"
          placeholder="Search 8000+ tutorials"
        />
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

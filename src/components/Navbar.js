import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";



const Navbar = ({ onSearch }) => {
    const navigate = useNavigate();
    

    const logoutUser = async (e) => {
        e.preventDefault();

        await signOut(auth);
        navigate("/");
    }

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Call the onSearch function with the search query
    onSearch(searchQuery);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span className="font-semibold text-xl tracking-tight"><img src="https://res.cloudinary.com/wpgroom-com/image/upload/v1571162720/brand-logo_wnhh0n.png" alt="" /></span>
        </div>
      </div>

      <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div className="relative mx-auto text-gray-600 lg:block">
          <input
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button
            type="button"
            className="right-0 top-0 mt-3 mr-2 border-l rounded-lg "
            onClick={handleSearchSubmit}
          >
           Search
          </button>
        </div>
        <div className="flex ">
    
          <button
            type = "submit"
            onClick = {(e) => logoutUser(e)}
            className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
          >
            Sign out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import { useState } from 'react';
import '../App.css'
const Search = ({ handleSearch }) => {
     const [searchTerm, setSearchTerm] = useState("");

     const handleInput = e => {
        setSearchTerm(e.target.value)
     }
  return (
    <div className="mt-32">
      <h1 className="text-6xl text-center mb-7">
        I Grow By Helping People In Need
      </h1>

      <div className="flex justify-center">
        <input
          onChange={handleInput}
          type="text"
          placeholder="Search food,health,clothing,or education"
          className="rounded-l-lg py-4 px-2 w-80 bg-white"
        />
        <button
          onClick={() => handleSearch(searchTerm)}
          className="custom-btn text-white bg-[#FF444A] rounded-r-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
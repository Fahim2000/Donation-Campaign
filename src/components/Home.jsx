import { useEffect, useState } from "react";
import AllDonations from "./AllDonations";
import Search from "./Search";

const Home = () => {
  const [search, setSearch] = useState(""); // State for search term
  const [allDonations, setAllDonations] = useState([]); // State for all donations
  const [originalDonations, setOriginalDonations] = useState([]); // State for original data

  // Function to handle the search input
  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setOriginalDonations(data); // Keep a copy of original data
        setAllDonations(data); // Set current donations
      });
  }, []); // This effect runs once on component mount

  // Handle the filtering based on search
  useEffect(() => {
    if (search === "education") {
      const newDonation = originalDonations.filter(
        (donation) => donation.category === "Education"
      );
      setAllDonations(newDonation);
    } 
    
    else if(search == "health"){
        const newDonation = originalDonations.filter(donation=>donation.category == "Health")
        setAllDonations(newDonation)
    }
    else if(search == "food"){
        const newDonation = originalDonations.filter(donation=>donation.category == "Food")
        setAllDonations(newDonation)
    }
    else if(search == "clothing"){
        const newDonation = originalDonations.filter(donation=>donation.category == "Clothing")
        setAllDonations(newDonation)
    }
    
    else {
      setAllDonations(originalDonations); // Reset to original if not filtering
    }
  }, [search, originalDonations]); // Dependencies ensure controlled re-renders

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AllDonations allDonations={allDonations} />
    </div>
  );
};

export default Home;

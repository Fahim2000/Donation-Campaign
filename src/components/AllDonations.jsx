import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const AllDonations = ({allDonations}) => {
//     const [allDonations,setAllDonations] = useState([])

//     const handleSearch = search => {
//         console.log(search);
//     }

//  useEffect(()=>{
//        fetch("data.json")
//          .then((res) => res.json())
//          .then((data) => setAllDonations(data));
//  },[])
    return (
        <div className="mt-32">
           

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {allDonations.map(donation=><DonationCard key={donation.id} donation={donation}></DonationCard>)}

            </div>
        </div>
    );
};

export default AllDonations;
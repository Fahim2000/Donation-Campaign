import { useEffect, useState } from "react";
import { getStoredDonations } from "../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import MySingleDonation from "./MySingleDonation";

const MyDonations = () => {
  const donations = useLoaderData();
  const [donated, setDonated] = useState([]);
  const [donationLength, setDonationLength] = useState(4);

  useEffect(() => {
    const storedDonations = getStoredDonations();

    if (donations.length > 0) {
      const totalDonations = donations.filter((donation) =>
        storedDonations.includes(donation.id)
      );
      setDonated(totalDonations);
    }
  }, [donations]);

  const handleViewAll = () => {
    // Show all donations by setting the length to the total number of donations
    setDonationLength(donated.length); // This will reveal all donations
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-10">
        {donated.slice(0, donationLength).map((donatedItem) => (
          <MySingleDonation key={donatedItem.id} donated={donatedItem} />
        ))}
      </div>
      {donated.length > 4 && donationLength < donated.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleViewAll}
            className="bg-green-800 text-white p-2 rounded-lg"
          >
            View All
          </button>
        </div>
      )}
    </>
  );
};

export default MyDonations;


import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from "../utility/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationDetails = () => {
  const allDonations = useLoaderData();
  const { id } = useParams();

  const myDonation = allDonations.find(
    (donation) => donation.id === parseInt(id, 10)
  );

const handleDonate = () => {
    saveDonation(myDonation.id)
    toast('You have donated successfully')
}


  return (
    <div className="flex flex-col p-4">
      {/* Image with overlay and button */}
      <div className="relative w-full h-[700px]">
        {/* Keep image size fixed */}
        <img
          src={myDonation.picture}
          alt="Donation"
          className="w-full h-full object-cover" // Adjusted to fit and keep consistent size
        />

        {/* Overlay starting from the bottom to a fixed height, not changing image size */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-black/70 flex items-end">
          {/* Button on the bottom-left corner */}
          <button
          onClick={handleDonate}
            style={{
              backgroundColor: myDonation.button_bg_color,
            }}
            className="m-4 px-4 py-2 text-white font-bold rounded shadow"
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* Donation information */}
      <div className="mt-4 text-left">
        <h1 className="text-4xl font-bold">{myDonation.category}</h1>
        <p className="text-lg">{myDonation.description}</p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default DonationDetails;

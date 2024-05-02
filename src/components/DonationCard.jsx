import { useNavigate } from "react-router-dom";
import "../App.css";

const DonationCard = ({ donation,handleSearch }) => {
  const navigate = useNavigate()
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_color,
  } = donation;

  const handleDetails = () => {
    
    console.log("clicked details of", id);
    navigate(`/donation/${id}`);
  }



  return (
    <div onClick={handleDetails}
    style={

      {cursor:"pointer"}
    }
    
    >
      <div>
        <img src={picture} alt="" className="rounded-t-lg" />
        <div className= "py-5 px-4 rounded-b-lg"
        
        style={
            {
                backgroundColor:card_bg_color,
            }
        }
        
        >
        

          <span
            className="py-1 px-2 rounded-md"
            style={{
              backgroundColor: category_bg_color,
              color: text_color,
            }}
          >
            {category}
          </span>
          <p className="mt-6 font-bold text-2xl" style={{ color: text_color }}>
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;



const MySingleDonation = ({donated}) => {
    return (
      <>
        <div className="flex">
          <img src={donated.picture} alt="" className="w-1/3" />

          <div
            className="flex-1 rounded-r-lg p-3 space-y-2"
            style={{
              backgroundColor: donated.card_bg_color,
            }}
          >
            <span
              className="p-1 rounded"
              style={{
                backgroundColor: donated.category_bg_color,
                color: donated.text_color,
              }}
            >
              {donated.category}
            </span>
            <p>{donated.description}</p>
            <p
              style={{
                color: donated.text_color,
              }}
            >
              ${donated.price}
            </p>
            <button
              className="p-1 rounded"
              style={{
                backgroundColor: donated.text_color,
                color: "white",
              }}
            >
              View Details
            </button>
          </div>
        </div>

     
      </>
    );
};

export default MySingleDonation;
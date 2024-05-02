
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getStoredDonations } from "../utility/localStorage";




const Stats = () => {
const [yourDonation, setYourDonation] = useState(0);
    
useEffect(() => {
  const storedDonations = getStoredDonations();
  setYourDonation(storedDonations.length);
}, [yourDonation]);
    return (
      <div className="w-full">
        <Chart
          type="pie"
          width={"100%"}
          height={800}
          series={[yourDonation,9 - yourDonation]}
          options={{
            title: { text: "Student PieChart" },
            noData: { text: "Empty Data" },
            // colors:["#f90000","#f0f"],
            labels: ['Your Donation ','Total Donation'],
          }}
        ></Chart>
      </div>
    );
};

export default Stats;
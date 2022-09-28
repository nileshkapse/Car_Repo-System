import React from 'react';
import { useNavigate } from "react-router-dom";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
Chart.register(Tooltip, Title, ArcElement, Legend);

function PieChart() {
     const data = {
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ["#eb34eb", "#ebdb34", "#347aeb"],
      },
    ],
    labels: ["Red", "Yellow", "Blue"],
  };
  const nevigate = useNavigate();
  return (
    <div className="card border-1">
                <div className="card-body">
                       <Pie data={data}/>
                </div> 
              </div>
  )
}

export default PieChart
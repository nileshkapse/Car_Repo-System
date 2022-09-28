import React from 'react'
import { useNavigate } from "react-router-dom";
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import {useState ,useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend );
const data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          'yellow'
        ]
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Red',
      'Yellow',
      'Blue'
  ], 
}; 

function DoughnutChart() {
 const nevigate = useNavigate();
const [data, setData] = useState({
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          'yellow'
        ]
    },
  ],
  labels: [
      'Red',
      'Yellow',
      'Blue'
  ], 
});
  useEffect(()=> {
    const fetchData = () =>  {
      fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        console.log("resss", res)
        const label = [];
        const data = [];
        for(var i of res) {
            label.push(i.name);
            data.push(i.id)
        }
        setData(
          {
            datasets: [{
                data:data,
                backgroundColor:[
                  '#fc0352',
                  '#03d3fc',
                  '#bafc03'
                ]
            },
          ],
          labels:label, 
        }
        )

      }).catch(e => {
        console.log("error", e)
      }) 
    }
  fetchData();
  }, [])
  return (
    <div>Doughnut Chart
       <div className="card border-1">
                <div className="card-body">
                       <Doughnut data={data}/>
                </div> 
              </div>
    </div>
  )
}

export default DoughnutChart
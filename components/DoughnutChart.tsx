"use client";

import React from 'react'
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

ChartJS.register(ArcElement,Tooltip,Legend);


const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data={
        datasets: [
            {
                label: 'Banks',
                data:[1250,2500,3750],
                backgroundColor: ['#fce8d8','#f7a56f','#f47c22']
            }
        ],
        labels:['Bank of Ceylon','Sampath Bank','Commercial Bank']
    }
  return (
    <Doughnut data={data}
    options={{
        cutout:'60%',
        plugins:{
            legend:{
                display:false
            }
        }
    }}/>
  )
}

export default DoughnutChart

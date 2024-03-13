import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import faker from 'faker';

  import { useRef, useState, useEffect } from 'react';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
  );
 
  const options = {
    responsive: true,
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
          label: function(tooltipItem) {
         console.log(tooltipItem)
            return tooltipItem.yLabel;
         }
       }
     }
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const  createGradient=(ctx, area) => {     
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  
    gradient.addColorStop(0, 'rgb(0, 0, 0)');
    gradient.addColorStop(0.5, 'rgb(36, 36, 36)');
    gradient.addColorStop(1, 'rgb(146, 146, 146)');
  
    return gradient;
  }
  
  

  export default function StackedChart(){

    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        datasets: [],
      });
  
    useEffect(() => {
        const chart = chartRef.current;
    
        if (!chart) {
          return;
        }
    
        const chartData = {
            labels,
          datasets: [
            {
              fill: true,
              data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: createGradient(chart.ctx,chart.chartArea),
            },
          ]
        };
    
        setChartData(chartData);
      }, []);
    
      return <Line options={options} data={chartData} ref={chartRef} />;
  }
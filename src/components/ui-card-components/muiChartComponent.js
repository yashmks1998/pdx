import {  useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function StackedChartMUI() {

    const [data,setData]=useState();
    
    useEffect(()=>{

        // here to integrate data for charts and set uData, xlabels
        const uData = [1000, 18000, 20300, 27680, 18900, 23900, 1200];
        const xLabels = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];

        setData({uData,xLabels});
    },[])
    return (
        data &&
      <LineChart
        width={500}
        height={300}
        series={[{ curve: "linear",data: data?.uData, area: true, showMark: false,color:'#428DFD' }]}
        xAxis={[{ scaleType: 'point', data: data?.xLabels }]}
        sx={{
          '& .MuiAreaElement-root': {
            fill: 'url(#swich-color-id-1)',
          },
        }}
      >
        <defs>
          <linearGradient
            id={'swich-color-id-1'}
            gradientTransform="rotate(90)"
            // Use the SVG coordinate instead of the component ones.
          >
            <stop offset={'0'} stopColor={'#ffffff'} stopOpacity={1} />
           <stop offset={'0.1'} stopColor={'#929292'} stopOpacity={1} />
          <stop offset={'0.72'} stopColor={'#242424'} stopOpacity={1} />
          <stop offset={'1'} stopColor={'#000000'} stopOpacity={1} />
          </linearGradient>
        </defs>
      </LineChart>
    );
  }
  
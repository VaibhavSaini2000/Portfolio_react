import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const CountriesChart = (props) => {
    const labels = props.stats.map(label => label.Country);

    const data = {
    labels,
    datasets: [
        {
        label: 'Active',
        data: props.stats.map(label => label.TotalConfirmed),
        backgroundColor: 'rgb(255, 99, 132)',
        },
        {
        label: 'Recovered',
        data: props.stats.map(label => label.TotalRecovered),
        backgroundColor: 'rgb(124,252,0)',
        },
        {
        label: 'Deceased',
        data: props.stats.map(label => label.TotalDeaths),
        backgroundColor: 'rgb(255, 255, 0)',
        },
    ],
    };

    return (
        <Bar options={options} data={data} />
    )
}

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chat as ChartJS } from "chart.js/auto";

const BarChart = ({ data }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (data) {
      const features = ['A', 'B', 'C', 'D', 'E', 'F'];

      const datasets = features.map(feature => ({
        label: feature,
        data: [data.reduce((sum, entry) => sum + entry[feature], 0)],
        backgroundColor: getRandomColor(),
      }));

      setChartData({
        labels: ['Total'],
        datasets,
      });
    }
  }, [data]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      {chartData && (
        <Bar
          data={chartData}
          options={{
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
                beginAtZero: true,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default BarChart;

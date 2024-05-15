"use client";

import {
  Chart as ChartJs,
  ArcElement,
  Tooltip,
  Legend,
  ChartDataset,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data: ChartData<"doughnut"> = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3000],
        backgroundColor: ["#0747b6", "#22658", "#2f91fa"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Card, CardContent, Typography, Button } from "@mui/material";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";
import usePokemonTypeCounts from "../hooks/usePokemonTypeCounts";

// Chart.js の設定
ChartJS.register(ArcElement, Tooltip, Legend);

const PokemonTypePieChart = () => {
  const { typeCounts, loading, error } = usePokemonTypeCounts("https://dummyapi.online/api/pokemon");

  const chartData = {
    labels: Object.keys(typeCounts),
    datasets: [
      {
        label: "Pokemon Type Distribution",
        data: Object.values(typeCounts),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#E7E9ED",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Card
      sx={{
        backgroundColor: "#e3f2fd", // 青色基調の背景色
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        maxWidth: "1000px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ color: "#1565c0" }}>
          Pokemon Type Distribution
        </Typography>
        {loading ? (
          <Typography>Loading...</Typography>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <div
            style={{
              width: "500px", // チャートの幅
              height: "500px", // チャートの高さ
              margin: "auto", // 中央に配置
            }}
          >
            <Pie data={chartData} />
          </div>
        )}
      </CardContent>
      <Link href={"/Home"}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          Homeに戻るよ
        </Button>
      </Link>
    </Card>
  );
};

export default PokemonTypePieChart;

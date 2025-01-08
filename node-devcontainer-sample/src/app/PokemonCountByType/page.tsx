"use client";

import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";

// Chart.js の設定
ChartJS.register(ArcElement, Tooltip, Legend);

type Pokemon = {
  id: number;
  pokemon: string;
  type: string;
  abilities: string[];
  hitpoints: number;
  evolutions: string[];
  location: string;
  image_url: string;
};

const PokemonTypePieChart = () => {
  const [typeCounts, setTypeCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get<Pokemon[]>(
          "https://dummyapi.online/api/pokemon"
        );
        const data = response.data;

        const counts: Record<string, number> = {};
        data.forEach((pokemon) => {
          const types = pokemon.type.split("/");
          types.forEach((type) => {
            counts[type] = (counts[type] || 0) + 1;
          });
        });

        setTypeCounts(counts);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, []);

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
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Pokemon Type Distribution
        </Typography>
        {Object.keys(typeCounts).length > 0 ? (
          <Pie data={chartData} />
        ) : (
          <Typography>Loading...</Typography>
        )}
      </CardContent>
      <Link href={"/Home"}>
                <button
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Homeに戻るよ
                </button>
            </Link>
    </Card>
  );
};

export default PokemonTypePieChart;

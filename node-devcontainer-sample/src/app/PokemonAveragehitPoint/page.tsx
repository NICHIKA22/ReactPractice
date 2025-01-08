"use client";

import React from "react";
import { BarChart } from "@mui/x-charts";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import Link from "next/link";
import useFetchPokemonData from "../hooks/useFetchPokemonData";

const PokemonBarChart = () => {
  const { chartData, loading, error } = useFetchPokemonData("https://dummyapi.online/api/pokemon");

  return (
    <Card
      sx={{
        backgroundColor: "#e3f2fd", // 青色基調の背景色
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ color: "#1565c0" }}>
          Pokemon Hitpoint Averages by Type
        </Typography>
        {loading ? (
          <Typography>Loading data...</Typography>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <Box
            sx={{
              margin: "20px auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <BarChart
              xAxis={[{ scaleType: "band", data: chartData.xAxis }]}
              series={[{ data: chartData.series }]}
              width={500}
              height={300}
            />
          </Box>
        )}
        <Link href={"/Home"} passHref>
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
      </CardContent>
    </Card>
  );
};

export default PokemonBarChart;

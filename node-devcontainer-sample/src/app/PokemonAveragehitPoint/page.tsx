"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BarChart } from "@mui/x-charts";

interface Pokemon {
  id: number;
  pokemon: string;
  type: string;
  hitpoints: number;
}

export default function PokemonBarChart() {
  const [chartData, setChartData] = useState<{ xAxis: string[]; series: number[] }>({
    xAxis: [],
    series: [],
  });

  useEffect(() => {
    // APIデータを取得
    async function fetchData() {
      try {
        const response = await fetch("https://dummyapi.online/api/pokemon");
        const data: Pokemon[] = await response.json();

        // Typeごとにヒットポイントを集計
        const typeMap: { [type: string]: { totalHp: number; count: number } } = {};
        data.forEach((pokemon) => {
          if (!typeMap[pokemon.type]) {
            typeMap[pokemon.type] = { totalHp: 0, count: 0 };
          }
          typeMap[pokemon.type].totalHp += pokemon.hitpoints;
          typeMap[pokemon.type].count += 1;
        });

        // 平均値を計算
        const xAxis = Object.keys(typeMap);
        const series = xAxis.map((type) => typeMap[type].totalHp / typeMap[type].count);

        setChartData({ xAxis, series });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Pokemon Hitpoint Averages by Type</h2>
      {chartData.xAxis.length > 0 ? (
        <BarChart
          xAxis={[{ scaleType: "band", data: chartData.xAxis }]}
          series={[{ data: chartData.series }]}
          width={500}
          height={300}
        />
      ) : (
        <p>Loading data...</p>
      )}
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
    </div>
    
  );
}

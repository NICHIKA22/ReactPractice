import { useState, useEffect } from "react";
import axios from "axios";

interface Pokemon {
  id: number;
  pokemon: string;
  type: string;
  hitpoints: number;
}

interface ChartData {
  xAxis: string[];
  series: number[];
}

const useFetchPokemonData = (url: string) => {
  const [chartData, setChartData] = useState<ChartData>({ xAxis: [], series: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Pokemon[]>(url);
        const data = response.data;

        // データを処理してチャート用に整形
        const typeMap: { [type: string]: { totalHp: number; count: number } } = {};
        data.forEach((pokemon) => {
          if (!typeMap[pokemon.type]) {
            typeMap[pokemon.type] = { totalHp: 0, count: 0 };
          }
          typeMap[pokemon.type].totalHp += pokemon.hitpoints;
          typeMap[pokemon.type].count += 1;
        });

        const xAxis = Object.keys(typeMap);
        const series = xAxis.map((type) => typeMap[type].totalHp / typeMap[type].count);

        setChartData({ xAxis, series });
      } catch (err) {
        setError("データの取得に失敗しました。");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { chartData, loading, error };
};

export default useFetchPokemonData;

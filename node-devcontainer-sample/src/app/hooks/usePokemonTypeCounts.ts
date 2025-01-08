import { useState, useEffect } from "react";
import axios from "axios";

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

const usePokemonTypeCounts = (url: string) => {
  const [typeCounts, setTypeCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Pokemon[]>(url);
        const data = response.data;

        const counts: Record<string, number> = {};
        data.forEach((pokemon) => {
          const types = pokemon.type.split("/");
          types.forEach((type) => {
            counts[type] = (counts[type] || 0) + 1;
          });
        });

        setTypeCounts(counts);
      } catch (err) {
        setError("データの取得に失敗しました。");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [url]);

  return { typeCounts, loading, error };
};

export default usePokemonTypeCounts;

"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Restaurant {
  Name: string;
  PK: number;
  CreatedOn: string;
  UpdatedOn: string;
  DeletedOn: string | null;
  CreatedByName: string;
  CreatedByID: string;
  UpdatedByName: string;
  UpdatedByID: string;
  DeletedByName: string | null;
  DeletedByID: string | null;
}

const API_URL = 'https://rentakondo-ageaaae9cabvh0b5.japaneast-01.azurewebsites.net/Restaurant/GET';

export function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get<Restaurant[]>(API_URL, {
         // headers: { 'Cache-Control': 'no-store' },
        });
        setRestaurants(response.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || 'Server error');
        } else {
          setError('Unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { restaurants, error, loading };
}

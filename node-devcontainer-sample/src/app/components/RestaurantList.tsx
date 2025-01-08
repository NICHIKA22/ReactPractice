"use client";
import React from 'react';
import { useFetchRestaurants } from '../hooks/useFetchRestaurants';
import ClientComponent from './ClientComponent';

export default function RestaurantList() {
  const { restaurants, error, loading } = useFetchRestaurants();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // データ取得が成功した場合にクライアントコンポーネントにデータを渡します
  return <ClientComponent restaurants={restaurants} />;
}

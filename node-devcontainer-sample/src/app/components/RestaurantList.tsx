import React from 'react';
import ClientComponent from './ClientComponent';

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

const API_URL =
  'https://rentakondo-ageaaae9cabvh0b5.japaneast-01.azurewebsites.net/Restaurant/GET';

export default async function RestaurantList() {
  let restaurants: Restaurant[] = [];

  try {
    const response = await fetch(API_URL, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    restaurants = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  // サーバーコンポーネントとしてデータを取得し、クライアントコンポーネントに渡します
  return <ClientComponent restaurants={restaurants} />;
}

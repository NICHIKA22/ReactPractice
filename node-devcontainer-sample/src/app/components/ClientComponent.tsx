import React from 'react';

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

interface Props {
  restaurants: Restaurant[];
}

export default function ClientComponent({ restaurants }: Props) {
  return (
    <div>
      <h2>Restaurant List</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.PK}>{restaurant.Name}</li>
        ))}
      </ul>
    </div>
  );
}

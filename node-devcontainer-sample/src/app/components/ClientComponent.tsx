'use client';

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

export default function ClientComponent({ restaurants }: { restaurants: Restaurant[] }) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Restaurant List</h2>
      {restaurants.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>PK</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Created Date</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>CreatedByName</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant) => (
              <tr key={restaurant.PK}>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{restaurant.PK}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{restaurant.Name}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{restaurant.CreatedOn}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{restaurant.CreatedByName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

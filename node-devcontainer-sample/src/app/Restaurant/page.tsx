"use client";
import React from 'react';
import RestaurantList from '../components/RestaurantList';
import Link from 'next/link';
export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1>React Server Component with Client Integration</h1>
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
      {/* サーバーコンポーネントを呼び出し */}
      <RestaurantList />
    </div>
  );
}

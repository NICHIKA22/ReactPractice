"use client";

import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HobbyContext } from '@/context/HobbyContext';
import Link from 'next/link';

export default function HobbyDisplayPage() {
  const { hobby } = useContext(HobbyContext); // Contextからhobbyを取得
  const router = useRouter();

  useEffect(() => {
    if (!hobby) {
      router.push('/HobbyInput'); // 趣味が設定されていない場合、入力ページにリダイレクト
    }
  }, [hobby, router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-600">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Your Hobby</h1>
        <p className="text-gray-600 text-lg">{hobby || "No hobby found."}</p>
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
    </div>
  );
}

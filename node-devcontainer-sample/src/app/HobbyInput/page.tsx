"use client";

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { HobbyContext } from '@/context/HobbyContext';

export default function HobbyInputPage() {
  const { setHobby } = useContext(HobbyContext);
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleSetHobby = () => {
    if (!inputValue) {
      alert('Please enter a hobby!');
      return;
    }
    setHobby(inputValue); // グローバル状態を更新
    router.push('/HobbyDisplay'); // HobbyDisplayに遷移
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-500 to-teal-600">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Set Your Hobby</h1>
        <input
          type="text"
          placeholder="Enter your hobby"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
        />
        <button
          onClick={handleSetHobby}
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Submit Hobby
        </button>
      </div>
    </div>
  );
}

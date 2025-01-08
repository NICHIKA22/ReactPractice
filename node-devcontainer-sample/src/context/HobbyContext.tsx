"use client";

import React, { createContext, useState, ReactNode } from 'react';

type HobbyContextType = {
  hobby: string;
  setHobby: (name: string) => void;
};

export const HobbyContext = createContext<HobbyContextType>({
  hobby: '',
  setHobby: () => {},
});

export function HobbyProvider({ children }: { children: ReactNode }) {
  const [hobby, setHobby] = useState('');

  return (
    <HobbyContext.Provider value={{ hobby, setHobby }}>
      {children}
    </HobbyContext.Provider>
  );
}

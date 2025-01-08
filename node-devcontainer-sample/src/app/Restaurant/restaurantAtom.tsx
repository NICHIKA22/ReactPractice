'use client';

import { atom } from 'jotai';

interface Restaurant {
  Name: string;
  PK: number;
  CreatedOn: string;
  UpdatedOn: string;
}

// レストランリスト専用のグローバルステート
export const restaurantAtom = atom<Restaurant[]>([]);

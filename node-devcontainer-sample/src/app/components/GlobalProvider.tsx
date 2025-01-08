// src/app/components/GlobalProvider.tsx
'use client';

import { atom, useAtom } from 'jotai';

// ユーザーネームのグローバルステート
export const usernameAtom = atom<string>('');

// フック: グローバルステートを取得・更新
export const useUsernameState = () => useAtom(usernameAtom);

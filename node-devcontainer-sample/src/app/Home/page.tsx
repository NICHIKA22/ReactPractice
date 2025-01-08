"use client";

import React, { useState, useTransition } from "react";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { userNameAtom } from "../atom/userAtom";

// MUI コンポーネントのインポート
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";

export default function Home() {
  const [userName] = useAtom(userNameAtom); // グローバル状態からユーザー名を取得
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleNavigate = (path: string) => {
    setActiveLink(path);
    startTransition(() => {
      router.push(path);
    });
  };

  const isButtonLoading = (path: string) => isPending && activeLink === path;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, #2196f3, #673ab7)", // 背景の青と紫のグラデーション
      }}
    >
      <Card
        sx={{
          width: 400,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >


        <CardContent>
        {/* ユーザー名を右上に表示 */}
        <Typography
          sx={{

            textAlign: "right",
            fontSize: "0.875rem",
            color: "#555",
            fontWeight: "bold",
          }}
        >
          Logged in as: {userName}
        </Typography>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              color: "gray",
              marginBottom: 3,
            }}
          >
            Welcome to Jotai App
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "black",
              marginBottom: 4,
            }}
          >
            Please select an action from below:
          </Typography>

          {/* 各ボタン */}
          {[
            { path: "/State", label: "State" },
            { path: "/Restaurant", label: "Server Side Component" },
            { path: "/PokemonCountByType", label: "Pokemon Count" },
            { path: "/PokemonAveragehitPoint", label: "Pokemon Average HP" },
            { path: "/HobbyInput", label: "Context API" },
          ].map(({ path, label }) => (
            <Button
              key={path}
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleNavigate(path)}
              sx={{
                marginBottom: 2,
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
              disabled={isButtonLoading(path)} // ローディング中は無効化
            >
              {isButtonLoading(path) ? (
                <CircularProgress
                  size={24}
                  sx={{
                    color: "#FF4500", // 朱色の設定
                    position: "absolute",
                  }}
                />
              ) : (
                label
              )}
            </Button>
          ))}

          {/* Logout ボタン */}
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleNavigate("/")}
            sx={{
              backgroundColor: "#d32f2f", // 赤色
              color: "#ffffff",
              fontWeight: "bold",
              marginTop: 3,
              textAlign: "center",
              "&:hover": {
                backgroundColor: "#b71c1c", // 赤の濃い色（ホバー時）
              },
            }}
            disabled={isButtonLoading("/")} // ローディング中は無効化
          >
            {isButtonLoading("/") ? (
              <CircularProgress
                size={20}
                sx={{
                  color: "#ffffff",
                }}
              />
            ) : (
              "Logout"
            )}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

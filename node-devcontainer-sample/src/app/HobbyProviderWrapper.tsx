"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { HobbyProvider } from "@/context/HobbyContext";

export default function HobbyProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // HobbyProviderを適用するパスのリスト
  const hobbyPaths = ["/HobbyInput", "/HobbyDisplay"];

  if (hobbyPaths.includes(pathname)) {
    return <HobbyProvider>{children}</HobbyProvider>;
  }

  return <>{children}</>;
}

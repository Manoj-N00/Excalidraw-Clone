"use client";

import type { Metadata } from "next";
import { useEffect } from "react";
import "./global.css";

export const metadata: Metadata = {
  title: "DrawIt",
  description: "A Real-time multiuser drawing app.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    const keepAlive = () => {
      fetch("https://excalidraw-clone.onrender.com/signin").catch(err =>
        console.error("HTTP Keep-alive error:", err)
      );

      // WebSocket Keep-Alive
      const ws = new WebSocket("wss://excalidraw-clone-1.onrender.com?token={token}");
      
      ws.onopen = () => ws.send("ping"); // Send a lightweight message
      ws.onerror = err => console.error("WebSocket error:", err);
      ws.onclose = () => console.log("WebSocket closed");

      // Ensure WebSocket is closed properly
      return () => {
        ws.close();
      };
    };

    const interval = setInterval(keepAlive, 180000); // Every 3 minutes (180,000 ms)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}

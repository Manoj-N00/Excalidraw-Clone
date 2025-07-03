"use client";

import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { useUser } from "@/hooks/useUser";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const keepAlive = () => {
      // fetch("https://excalidraw-clone.onrender.com/signin").catch((err) =>
fetch("http://localhost:3001/signin").catch((err) =>
        console.error("HTTP Keep-alive error:", err)
      );

      // WebSocket Keep-Alive
      const ws = new WebSocket("wss://excalidraw-clone-1.onrender.com");
      ws.onopen = () => ws.send("ping"); // Send a lightweight message
      ws.onerror = (err) => console.error("WebSocket error:", err);
      ws.onclose = () => console.log("WebSocket closed");

      return () => ws.close();
    };

    const interval = setInterval(keepAlive, 180000); // Every 3 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
};

export default Page;

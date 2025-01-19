"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const MainPage = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    // Periksa status koneksi saat pertama kali di-render
    setIsOnline(window.navigator.onLine);

    // Tambahkan event listener untuk perubahan status jaringan
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Bersihkan event listener saat komponen dilepas
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <div className="flex items-center flex-col justify-center min-h-screen">
      <div>
        Status:{" "}
        {isOnline ? (
          <span className="bg-green-600 rounded-lg p-0.5">online</span>
        ) : (
          <span className="bg-red-600 rounded-lg p-0.5">offline</span>
        )}
      </div>
      <Link href={"/"}>Go home page</Link>
    </div>
  );
};

export default MainPage;

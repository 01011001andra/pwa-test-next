"use client";

import Link from "next/link";
import React from "react";

const MainPage = () => {
  return (
    <div className="flex items-center flex-col justify-center min-h-screen">
      <div>
        Status:{" "}
        {window.navigator.onLine ? (
          <span className="bg-green-600 rounded-lg p-0.5">online</span>
        ) : (
          <span className="bg-red-600 rounded-lg p-0.5">online</span>
        )}
      </div>
      <Link href={"/"}>Go home page</Link>
    </div>
  );
};

export default MainPage;

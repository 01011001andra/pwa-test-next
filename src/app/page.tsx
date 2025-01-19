"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const isOnline =
    typeof window !== "undefined" ? window.navigator.onLine : false;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
          <li>
            Status:{" "}
            {isOnline ? (
              <span className="bg-green-600 rounded-lg p-0.5">online</span>
            ) : (
              <span className="bg-red-600 rounded-lg p-0.5">online</span>
            )}
          </li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href={"/main"}>Go main page</Link>
      </footer>
    </div>
  );
}

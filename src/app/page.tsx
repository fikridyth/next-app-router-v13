import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost/3000'),
  title: "Home",
  description: "App Next JS",
  authors: [{ name: "Fikri Hidayat", url: "fikridyth.github.io" }],
  icons: {
    icon: "/images/icon.png",
  },
  openGraph: {
    title: "Fikri Hidayat",
  },
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Hello World
      </main>
    </div>
  );
}

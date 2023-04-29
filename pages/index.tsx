import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pomodeep</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center bg-[#000002] h-screen  ">
        <p className="animate-pulse text-gray-200">Pomodeep 🎉</p>
      </main>
    </>
  );
}

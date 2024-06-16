import Image from "next/image";
import Navbar from "./_components/navbar";
import Homepage from "./_components/home/homepage";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Homepage />
    </main>
  );
}

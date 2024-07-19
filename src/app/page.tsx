import LearnLink from "@/components/LearnLink";
import LearnUseRouter from "@/components/LearnUseRouter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="text-2xl">Hello NextJs</h1>
    <LearnLink/>
    <LearnUseRouter/>
    </main>
  );
}

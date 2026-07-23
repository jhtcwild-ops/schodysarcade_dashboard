import Sidebar from "@/components/layout/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <section className="flex-1 p-10">
        <h1 className="text-5xl font-bold text-white">
          Schody&apos;s Arcade Creator Hub
        </h1>

        <p className="mt-4 text-slate-400">
          AI-powered YouTube analytics dashboard
        </p>
      </section>
    </main>
  );
}
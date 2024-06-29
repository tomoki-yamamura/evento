import Link from "next/link";
import SearchFrom from "../components/search-form";

export default function Home() {

  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <h1 className="text-3xl font-bold 
      tracking-tight lg:text-6xl">
        Find events around you
      </h1>

      <p className="mb-12 mt-7 opacity-75 text-2xl lg:text-3xl">
        Brows more than <span className="font-bold text-accent italic underline">10,000 events</span> around you
      </p>

      <SearchFrom />

      <section className="flex mt-4 gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="events/austin">Austin</Link>
          <Link href="events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  )
}
import Loading from "@/app/event/[slug]/loading";
import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params: {
    city: string
  }
}

type EventsPageProps = Props & {
  searchParams: {
    [key: string]: (string | string[]) | undefined 
  }
}

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city
  return {
    title: city === "all" ? "All Events" : `Events is ${capitalize(city)}`,
  }
}

export default async function EventsPage({ params, searchParams }: EventsPageProps) {
  const city = params.city
  const page = searchParams.page ?? 1

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList page={+page} city={city} />
      </Suspense>
    </main>
  )
}

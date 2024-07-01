import { EventoEvent } from "@/lib/types"
import EventCard from "./event-card"
import { getEvents } from "@/lib/utils"

type EventsListProps = {
  city: string;
}

export default async function EventsList({ city }: EventsListProps) {
  const events = await getEvents(city);

  return (
    <section className="px-5 max-w-[1100px] flex flex-wrap gap-10 justify-center">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  )
}

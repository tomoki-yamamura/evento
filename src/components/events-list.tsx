import { EventoEvent } from "@/lib/types"
import EventCard from "./event-card"

type EventsListProps = {
  events: EventoEvent[]
}

export default function EventsList({ events }: EventsListProps) {
  return (
    <section className="px-5 max-w-[1100px] flex flex-wrap gap-10 justify-center">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  )
}

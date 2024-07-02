import { EventoEvent } from "@/lib/types"
import EventCard from "./event-card"
import PaginationControls from "./paginationControls";
import { getEvents } from "@/lib/server-utils";

type EventsListProps = {
  city: string;
  page?: number;
}

export default async function EventsList({ city, page = 1 }: EventsListProps) {
  const { events, totalCount } = await getEvents(city, page);

  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath = totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : ""

  return (
    <section className="px-5 max-w-[1100px] flex flex-wrap gap-10 justify-center">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  )
}

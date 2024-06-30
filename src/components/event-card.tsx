import { EventoEvent } from "@/lib/types"
import Image from "next/image"

type EventCardProps = {
  event: EventoEvent
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <section className="flex flex-col flex-1 basis-80 h-[380px] max-w-[500px] bg-white/[3%] rounded-xl overflow-hidden relative">
      <Image src={event.imageUrl} alt={event.name} width={500} height={280} className="h-[60%] object-cover" />
      <div className="flex-1 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold">{event.name}</h2>
        <p className="italic text-white/75">By {event.organizerName}</p>
        <p className="text-sm text-white/50 mt-4">{event.location}</p>
      </div>

      <section className="absolute left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md flex flex-col justify-center items-center">
        <p className="text-xl font-bold -md-[5px]">
          {new Date(event.date).toLocaleDateString("en-US", {
            day: "2-digit"
          })}
        </p>
        <p className="text-sm uppercase text-accent">
          {new Date(event.date).toLocaleDateString("en-US", {
            month: "short"
          })}
        </p>
      </section>
    </section>
  )
}

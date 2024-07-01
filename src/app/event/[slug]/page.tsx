import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";
import { capitalize, getEvent } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug
  
  const event = await getEvent(slug)
  return {
    title: event.name,
  }
}

export default async function EventPage({ params }: Props) {
  const slug = params.slug
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: EventoEvent = await response.json()

  return (
    <main>
      <section className="flex items-center justify-center relative overflow-hidden py-14 md:py-20">
        <Image
          src={event.imageUrl}
          className="object-cover blur-3xl"
          alt="Event background image"
          fill
          quality={50}
          priority
          sizes="(max-width: 1280px) 100vw, 1280px" />

        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-16">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className=" rounded-xl border-2 border-white/50 object-cover"
          />

          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString(
                "en-US", {
                weekday: "long",
                month: "long",
                day: "numeric"
              }
              )}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">{event.name}</H1>
            <p className=" whitespace-nowrap text-xl text-white/75">
              Organaized by <span className="italic">{event.organizerName}</span>
            </p>

            <button className="bg-white/20 text-lg capitalize mt-5 lg:mt-auto w-[95vw] sm:w-full py-2 rounded-md border-white/10 border-2 state-effects">Get tickets</button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent >{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent >{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  )
}

type SectionProps = {
  children: React.ReactNode
}

function Section({ children }: SectionProps) {
  return (
    <section className="mb-12">
      {children}
    </section>
  )
}

type SectionHeadingProps = {
  children: React.ReactNode
}

function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl mb-8">{children}</h2>
  )
}

type SectionContentProps = {
  children: React.ReactNode
}

function SectionContent({ children }: SectionContentProps) {
  return (
    <p className=" max-w-4xl text-lg leading-8 text-white/75">{children}</p>
  )
}

"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchFrom() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (!searchText) return
    router.push(`events/${searchText}`)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%]
     outline-none px-6 ring-accent/50 transition
      focus:ring-2 focus:bg-white/10"
        placeholder="Search events in any city..."
        spellCheck={false}
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
    </form>
  )
}

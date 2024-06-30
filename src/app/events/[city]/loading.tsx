import SkeletonCard from "@/components/skeleton-card";

export default function loading() {
  return (
    <div className="flex justify-center flex-wrap max-w-[1100px] mx-auto px-[20px] py-24 gap-20">
      {Array.from({ length: 6 }).map((item, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  )
}


export default function Loading() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-6 px-5 py-10 md:px-10">
      {/* Hero skeleton */}
      <div className="flex flex-col gap-4 mt-20">
        <div className="h-6 w-32 bg-gray-200 animate-pulse" />
        <div className="h-16 w-3/4 bg-gray-200 animate-pulse" />
        <div className="h-16 w-1/2 bg-gray-200 animate-pulse" />
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-100 bg-gray-200 animate-pulse" />
        ))}
      </div>
    </div>
  );
}

export default function ProjectLoading() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero area skeleton matching your slug page layout */}
      <div className="relative w-full min-h-[90vh] bg-gray-300 animate-pulse" />

      {/* Gallery grid skeleton */}
      <div className="grid grid-cols-1 gap-7 px-4 py-10 md:grid-cols-2 md:px-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-100 bg-gray-200 animate-pulse" />
        ))}
      </div>
    </div>
  );
}
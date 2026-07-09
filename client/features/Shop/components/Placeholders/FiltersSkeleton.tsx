export default function FiltersSkeleton() {
  return (
    <div className="animate-pulse">

      {/* دسته بندی */}
      <div className="mb-10">
        <div className="h-6 w-32 bg-gray-700 rounded mb-6"></div>

        {[1,2,3,4,5].map(item => (
          <div
            key={item}
            className="h-4 w-40 bg-gray-700 rounded mb-5"
          />
        ))}
      </div>

      {/* قیمت */}
      <div className="mb-10">

        <div className="h-6 w-24 bg-gray-700 rounded mb-6"></div>

        <div className="h-12 bg-gray-700 rounded mb-4"></div>

        <div className="h-2 bg-gray-700 rounded mb-6"></div>

        <div className="h-12 bg-gray-700 rounded mb-4"></div>

        <div className="h-2 bg-gray-700 rounded"></div>

      </div>

      {/* سرچ */}
      <div>

        <div className="h-6 w-36 bg-gray-700 rounded mb-5"></div>

        <div className="h-12 bg-gray-700 rounded"></div>

      </div>

    </div>
  )
}
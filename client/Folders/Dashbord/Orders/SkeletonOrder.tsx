export default function SkeletonOrder() {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow p-4 my-5 animate-pulse"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            
            {/* اطلاعات سفارش */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
              {[...Array(3)].map((_, i) => (
                <div key={i}>
                  <div className="w-24 h-3 bg-gray-200 rounded mb-3" />
                  <div className="w-32 h-4 bg-gray-300 rounded" />
                </div>
              ))}
            </div>

            {/* تصاویر محصولات */}
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, imageIndex) => (
                <div
                  key={imageIndex}
                  className="w-16 h-16 rounded-md bg-gray-200"
                />
              ))}
            </div>

          </div>
        </div>
      ))}
    </>
  )
}
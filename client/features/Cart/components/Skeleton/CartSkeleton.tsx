export default function CartSkeleton() {
  return (
    <div className="container mx-auto py-6 animate-pulse">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* لیست محصولات */}
        <div className="flex-1 space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border border-[#e0e0e0] rounded-xl p-4 flex flex-col sm:flex-row gap-4"
            >
              {/* تصویر */}
              <div className="w-full sm:w-28 h-40 sm:h-28 bg-gray-200 rounded-lg shrink-0" />

              {/* اطلاعات */}
              <div className="flex-1 space-y-3">
                <div className="h-5 w-3/4 bg-gray-200 rounded" />
                <div className="h-4 w-1/2 bg-gray-200 rounded" />
                <div className="h-4 w-1/3 bg-gray-200 rounded" />
              </div>

              {/* قیمت و تعداد */}
              <div className="flex sm:flex-col justify-between sm:items-end gap-3 sm:min-w-[130px]">
                <div className="h-10 w-28 bg-gray-200 rounded-lg" />
                <div className="h-5 w-24 bg-gray-200 rounded" />
                <div className="h-4 w-20 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* خلاصه سفارش */}
        <div className="w-full lg:w-[360px] border border-[#e0e0e0] rounded-xl p-5 h-fit">
          <div className="h-6 w-40 bg-gray-200 rounded mx-auto mb-6" />

          <div className="space-y-5">
            <div className="flex justify-between">
              <div className="h-4 w-28 bg-gray-200 rounded" />
              <div className="h-4 w-16 bg-gray-200 rounded" />
            </div>

            <div className="flex justify-between">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-4 w-20 bg-gray-200 rounded" />
            </div>

            <div className="border-t pt-5 flex justify-between">
              <div className="h-5 w-32 bg-gray-200 rounded" />
              <div className="h-5 w-28 bg-gray-200 rounded" />
            </div>

            <div className="h-12 w-full bg-gray-200 rounded-lg mt-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
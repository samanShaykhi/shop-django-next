import { CiSearch } from 'react-icons/ci'
import { useFilter } from '../hooks/useFilter'
import { FiltersContainer } from './FiltersContainer'

export default function Filters () {
  const {
    Categorys,
    category,
    minPrice,
    maxPrice,
    handleCategory,
    removeFilter,
    MIN,
    MAX,
    minPriceinp,
    setMinPriceinp,
    maxPriceinp,
    setMaxPriceinp,
    updatePrice,
    handleDeleteFilterPrice
  } = useFilter()
  return (
    <div className='flex flex-col'>
      <div className=''>
        <FiltersContainer is_active={true} label='دسته بندی ها'>
          <ul>
            {category && (
              <button
                onClick={() => removeFilter('category')}
                className='bg-white p-1 text-[11px] rounded mr-auto cursor-pointer'
              >
                حذف فیلتر
              </button>
            )}
            {Categorys && (
              <>
                {Categorys.map(cat => {
                  return (
                    <li
                      onClick={() => handleCategory(cat.slug)}
                      key={cat.id}
                      className={`${
                        category === cat.slug
                          ? 'text-white border-white '
                          : 'text-[#c7c6c6]'
                      } hover:text-white my-4 cursor-pointer border-b-3 border-transparent pb-2 w-fit`}
                    >
                      {cat.title}
                    </li>
                  )
                })}
              </>
            )}
          </ul>
        </FiltersContainer>
        <FiltersContainer is_active={true} label='قیمت'>
          {minPrice && maxPrice && (
            <button
              onClick={handleDeleteFilterPrice}
              className='bg-white p-1 text-[11px] mb-2 block rounded  cursor-pointer'
            >
              حذف فیلتر
            </button>
          )}
          <div>
            <div>
              <div className='border p-3 rounded text-white flex items-center justify-between mb-2'>
                <span>از</span>
                {minPriceinp.toLocaleString()}
              </div>
              <input
                type='range'
                min={MIN}
                max={MAX}
                step={1000}
                value={minPriceinp}
                onChange={e =>
                  setMinPriceinp(
                    Math.min(Number(e.target.value), maxPriceinp - 1000)
                  )
                }
                onMouseUp={() => {
                  updatePrice([minPriceinp, maxPriceinp])
                }}
                onTouchEnd={() => {
                  updatePrice([minPriceinp, maxPriceinp])
                }}
                className=' w-full'
              />
            </div>
            <div>
              <div className='border mb-2 p-3 rounded text-white flex items-center justify-between'>
                <span>تا</span>
                {maxPriceinp.toLocaleString()}
              </div>
              <input
                type='range'
                min={MIN}
                max={MAX}
                step={1000}
                value={maxPriceinp}
                onChange={e =>
                  setMaxPriceinp(
                    Math.max(Number(e.target.value), minPriceinp + 1000)
                  )
                }
                onMouseUp={() => {
                  updatePrice([minPriceinp, maxPriceinp])
                }}
                onTouchEnd={() => {
                  updatePrice([minPriceinp, maxPriceinp])
                }}
                className=' w-full'
              />
            </div>
          </div>
        </FiltersContainer>
        <FiltersContainer label='جستجو در نتایج'>
          <div className='text-white flex items-center'>
            <input
              className='border p-2  w-full border-white rounded-br rounded-tr border-l-0 outline-0 text-white'
              type='text'
              placeholder='جستجو کن'
            />
            <div className='border border-r-0 rounded-bl rounded-tl border-white p-2 cursor-pointer'>
              <CiSearch className='' />
            </div>
          </div>
        </FiltersContainer>
      </div>
    </div>
  )
}

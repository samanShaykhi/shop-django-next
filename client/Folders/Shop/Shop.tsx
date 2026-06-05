'use client'
import Filters from './Filters'
import axios from 'axios'
import ListProducts from './ListProducts'
import Pagination from '../utils/Pagination/Pagination'
export default function Shop () {
  const fechDataFromDRF = async () => {
    try {
      const fexh = await axios.get('http://127.0.0.1:8000/todo/test/')
      console.log(fexh)
    } catch (error) {
      console.log(error)
    }
  }
  // const menuData: MenuItem[] = [
  //   {
  //     id: '1',
  //     label: 'داشبورد',
  //     icon: '📊'
  //   },
  //   {
  //     id: '2',
  //     label: 'محصولات',
  //     icon: '🛒',
  //     children: [
  //       {
  //         id: '2-1',
  //         label: 'لیست محصولات',
  //         icon: '📋'
  //       },
  //       {
  //         id: '2-2',
  //         label: 'دسته‌بندی‌ها',
  //         icon: '🏷️',
  //         children: [
  //           { id: '2-2-1', label: 'الکترونیک', icon: '🔌' },
  //           { id: '2-2-2', label: 'مد و پوشاک', icon: '👗' }
  //         ]
  //       },
  //       {
  //         id: '2-3',
  //         label: 'افزودن محصول',
  //         icon: '➕'
  //       }
  //     ]
  //   },
  //   {
  //     id: '3',
  //     label: 'تنظیمات',
  //     icon: '⚙️',
  //     children: [
  //       { id: '3-1', label: 'پروفایل', icon: '👤' },
  //       { id: '3-2', label: 'امنیت', icon: '🔒' }
  //     ]
  //   }
  // ]
  return (
    <div className='container my-4'>
      <div className='flex justify-between mb-6'>
        <div className='sidebar w-[30%] '>
          <div className='bg-black px-4 rounded-2xl sticky top-6 '>
            <Filters />
            {/* <NestedMenu items={menuData} /> */}
          </div>
        </div>
        <div className='body w-[70%]'>
          <div className=' p-4 '>
            <ListProducts />
          </div>
          <Pagination />
        </div>
      </div>
      {/* <button
        onClick={fechDataFromDRF}
        className='bg-blue-800 text-white p-2 rounded-2xl'
      >
        django rest framwork
      </button> */}
    </div>
  )
}

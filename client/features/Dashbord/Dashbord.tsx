import { FaAngleLeft } from 'react-icons/fa6'
import Breadcrumbs from '../utils/Breadcrumbs/Breadcrumbs'

export default function Dashbord () {
  return (
    <div>
      <div className='bg-white p-4 border-t border-b'>
        <Breadcrumbs
          homeLabel='خانه'
          items={[{ label: 'داشبورد' }]}
          separator={<FaAngleLeft />}
        />
      </div>
    </div>
  )
}

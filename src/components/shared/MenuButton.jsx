import React from 'react'
import {Link} from 'react-router-dom'
const MenuButton = ({item}) => {
  return (
    <Link to={item.path} className='w-full bg-axio-white hover:bg-axio-blue text-axio-dark-blue hover:text-axio-white font-medium text-lg rounded-lg p-4 py-3 transition-all duration-200'>
    <button className=' flex flex-row w-full gap-4 items-center justify-start  '>
       <div>
        {item.icon}
       </div>
       <p className=' text-sm truncate'>
        {item.name}
       </p>
    </button>

    </Link>
  )
}

export default MenuButton

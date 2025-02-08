import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

const Title = ({title,desc}) => {
  return (
    <div className=' flex flex-row gap-2 relative text-axio-black '>
        <div className=' flex flex-col gap-4'>
            <p className=' text-2xl font-bold '>{title}</p>
            <p className=' text-base text-axio-gray-500 '>{desc}</p>
        </div>
    </div>
  )
}

export default Title
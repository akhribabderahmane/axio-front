import React from 'react'
import OverallStats from '../components/acceuil/OverallStats'
import BarGraph from '../components/acceuil/BarGraph'
const Acceuil = () => {
  return (
    <div className=' flex flex-col gap-12'>
      <OverallStats />
      <BarGraph />
    </div>
  )


}

export default Acceuil

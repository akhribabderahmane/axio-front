import React from 'react'
import StatsCard from './StatsCard'
const OverallStats = () => {
    const stats = [
        {
            id: 1,
            title: "Nombre d’optimisations",
            value: 100,
            improvement: 10,
            icon: <img className=' w-10 h-10' src="/acceuil/firstOpt.svg" alt="optimisations" />
        },
        {
            id: 2,
            title: "Coûts économisés",
            value: 100,
            improvement: 10,
            icon: <img className=' w-10 h-10' src="/acceuil/secondOpt.svg" alt="optimisations" />

        },{
            id: 3,
            title: "Trajets optimisés",
            value: 100,
            improvement: 10, 
            icon: <img className=' w-10 h-10' src="/acceuil/thirdOpt.svg" alt="optimisations" />

        }
    ]
  return (
    <div className=' flex flex-row gap-8 w-full flex-wrap'>
      {stats.map((stat) => (
        <StatsCard key={stat.id} stat={stat} />
      ))}
    </div>
  )

}

export default OverallStats

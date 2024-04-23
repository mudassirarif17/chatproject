import Chart  from './Chart'
import React from 'react'

const Dashboard = () => {
  

  

  return (
    <div className='w-[70vw] flex flex-col items-center'>

      <div className="cards w-[90%] mt-10 flex justify-around">
        <div className="card w-[30vw] h-[23vh] border-2 border-gray-300 rounded-lg flex flex-col justify-center">
          <h1 className='px-5 text-2xl'>Mudassir Arif</h1>
          <p className=' px-5 text-xl'>Total Balance : RS10000</p>
        </div>
        <div className="card w-[30vw] h-[23vh] border-2 border-gray-300 rounded-lg flex flex-col justify-center">
          <h1 className='px-5 text-2xl'>Mudassir Arif</h1>
          <p className=' px-5 text-xl'>Total Balance : RS10000</p>
        </div>
      </div>

      {/* Chart */}
      <div>
      <Chart/>

      </div>

      <div className="cards w-[90%] mt-10 flex justify-around">
        <div className="card w-[30vw] h-[23vh] border-2 border-gray-300 rounded-lg flex flex-col justify-center">
          <h1 className='px-5 text-2xl'>Mudassir Arif</h1>
          <p className=' px-5 text-xl'>Total Balance : RS10000</p>
        </div>
        <div className="card w-[30vw] h-[23vh] border-2 border-gray-300 rounded-lg flex flex-col justify-center">
          <h1 className='px-5 text-2xl'>Mudassir Arif</h1>
          <p className=' px-5 text-xl'>Total Balance : RS10000</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
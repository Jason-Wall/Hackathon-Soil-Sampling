import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function Graph() {

    const data = [{x: 0.1, y: 2.3},
       {x: 0.5, y: 11},
        {x: 1, y: 25.2},
        {x: 2.5, y: 45.3},
       {x: 5, y: 73.7},
        {x: 10, y: 93.5},
        {x: 50, y: 98.5},
       {x: 100, y: 100},
        {x: 200, y: 100}]

  return (
    <div className='w-full bg-slate-200'>

    
    <div className='w-full h-auto max-w-6xl bg-slate-200 flex justify-center items-center'>
        <LineChart width={800} height={500} data={data}
        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" reversed='true'   />
        <YAxis  />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="x" stroke="#8884d8" />
        
        </LineChart>
        

    </div>
    </div>
  )
}

export default Graph
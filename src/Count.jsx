import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  

  return (
      <div className='flex items-center'>
 <button onClick={()=>setCount(count-1)} className="bg-[#e9543d] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 opacity-75">-</button>
      <p className='text-6xl'>{count}</p>
      <button onClick={()=>setCount(count+1)} className="bg-[#e9543d] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 opacity-75">-</button>
    </div>
    
    
  )
}

export default Counter



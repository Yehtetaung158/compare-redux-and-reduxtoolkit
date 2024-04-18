import React from 'react'
import { increase } from '../store/action/counter.action'
import { useDispatch } from 'react-redux'

const IncreaseComponent = () => {
    const dispatch=useDispatch()

    const handleIncrease=()=>{
        increase(dispatch)
    }

  return (
    <div>
        <button className=' bg-green-600 text-white p-2' onClick={handleIncrease}>Increase</button>
    </div>
  )
}

export default IncreaseComponent
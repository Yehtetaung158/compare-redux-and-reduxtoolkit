import React from 'react'
// import { increase } from '../store/action/counter.action'
import { useDispatch } from 'react-redux'
import { increasewithPayload } from '../store/reducer/counter.slite'

const IncreaseWithPayload = () => {
    const dispatch=useDispatch()

    const handleIncrease=()=>{
        dispatch(increasewithPayload(3))
    }

  return (
    <div>
        <button className=' bg-yellow-600 text-white p-2' onClick={handleIncrease}>IncreaseWithPayload</button>
    </div>
  )
}

export default IncreaseWithPayload
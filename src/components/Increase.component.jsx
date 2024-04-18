import React from 'react'
// import { increase } from '../store/action/counter.action'
import { useDispatch } from 'react-redux'
import { increase } from '../store/reducer/counter.slite'

const IncreaseComponent = () => {
    const dispatch=useDispatch()

    const handleIncrease=()=>{
        dispatch(increase())
    }

  return (
    <div>
        <button className=' bg-green-600 text-white p-2' onClick={handleIncrease}>Increase</button>
    </div>
  )
}

export default IncreaseComponent
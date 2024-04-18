import React from 'react'
import { useDispatch } from 'react-redux'
import { decrease } from '../store/reducer/counter.slite'
// import { decrease } from '../store/action/counter.action'

const DecreaseComponent = () => {
    const dispatch=useDispatch()

    const handleIncrease=()=>{
        dispatch(decrease())
    }

  return (
    <div>
        <button className=' bg-red-600 text-white p-2' onClick={handleIncrease}>Decrease</button>
    </div>
  )
}

export default DecreaseComponent
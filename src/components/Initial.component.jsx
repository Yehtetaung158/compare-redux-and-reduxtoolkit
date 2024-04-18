import React from 'react'
import { useSelector } from 'react-redux'

const InitialComponent = () => {
    const {value}=useSelector(state=>state.counter)
  return (
    <div>
        I am initial {value}
    </div>
  )
}

export default InitialComponent
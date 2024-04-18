import React from 'react'
import InitialComponent from './components/Initial.component'
import IncreaseComponent from './components/Increase.component'
import DecreaseComponent from './components/Decrease.component'
import IncreaseWithPayload from './components/IncreaseWithPayload'

const App = () => {
  return (
    <div>
      {<InitialComponent/>}
      <div className=' flex flex-row gap-2'>
        {<IncreaseComponent/>}
        {<DecreaseComponent/>}
        {<IncreaseWithPayload/>}
      </div>
    </div>
  )
}

export default App
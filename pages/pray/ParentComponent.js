// ParentComponent.js
import React from 'react'
import Mazu3 from './mazu3'
import Mazu4 from './mazu4'
import { NumberProvider } from './NumberContext'

const ParentComponent = () => {
  return (
    <NumberProvider>
      <Mazu3 />
      <Mazu4 />
    </NumberProvider>
  )
}

export default ParentComponent

import React from 'react'
import ColorFilter from '../ColorFilter'

import './CardListFilters.scss'

const CardListFilters = () => {
  const handleColorChange = (colorQuery: string) => {
    console.log(colorQuery)
  }

  return (
    <React.Fragment>
      <ColorFilter
        onColorChange={handleColorChange}
      />
    </React.Fragment>
  )
}

export default CardListFilters
  
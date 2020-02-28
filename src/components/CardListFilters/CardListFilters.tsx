import React, { useState, useEffect } from 'react'
import ColorFilter from '../ColorFilter'
import './CardListFilters.scss'
import { useDispatch } from 'react-redux'
import _ from 'lodash'
import { fetchCards } from '../../store/cardList/actions'
import TypeFilter from '../TypeFilter'

const CardListFilters = () => {
  const [queryObj, setQueryObj] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    if (!_.isEmpty(queryObj)) {
      dispatch(fetchCards(queryObj))
    }
  }, [queryObj])

  const handleColorChange = (colorQuery: string) => {
    setQueryObj(prevQueryObj => ({...prevQueryObj, 'c': colorQuery}))
  }

  const handleTypeChange = (typeQuery: string) => {
    setQueryObj(prevQueryObj => ({...prevQueryObj, 't': typeQuery}))
  }

  return (
    <React.Fragment>
      <ColorFilter
        onColorChange={handleColorChange}
      />
      <TypeFilter
        onTypeChange={handleTypeChange}
      />
    </React.Fragment>
  )
}

export default CardListFilters
  
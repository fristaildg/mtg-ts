import React, { useState, useEffect } from 'react'
import { TypeFilterProps } from './types'

const typeList = ['instant', 'sorcery', 'creature', 'land']

const TypeFilter: React.FC<TypeFilterProps> = ({onTypeChange}) => {
  const [typeQuery, setTypeQuery] = useState('')

  useEffect(() => {
    onTypeChange(typeQuery)
  }, [typeQuery])

  const handleTypeClick = (type: string) => {
    setTypeQuery(type)
  }

  return (
    <ul className="type-filter">
      {typeList.map(type => (
        <li
          key={type}
          className='type-filter-item'
          onClick={() => {
            handleTypeClick(type)
          }}
        >
          <span>{type}</span>
        </li>
      ))}
    </ul>
  )
}

export default TypeFilter
  
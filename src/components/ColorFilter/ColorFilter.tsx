import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchColors } from '../../store/symbology/actions'
import { RootState, ColorFilterProps } from './types'
import { Symbol } from '../../store/symbology/types'
import classNames from 'classnames'

import './ColorFilter.scss'

const ColorFilter: React.FC<ColorFilterProps> = ({onColorChange}) => {
  const dispatch = useDispatch()
  const colorList = useSelector((state: RootState) => state.SymbologyReducer.colorList)

  const [colorQuery, setColorQuery] = useState('')

  useEffect(() => {
    dispatch(fetchColors())
  }, [])

  useEffect(() => {
    onColorChange(colorQuery)
  }, [colorQuery])

  const isSelected = (color: Symbol) => colorQuery.indexOf(color.loose_variant) !== -1

  const handleColorClick = (color: Symbol) => {
    if (!isSelected(color)) {
      setColorQuery(prevColorQuery => `${prevColorQuery}${color.loose_variant}`)
    } else {
      setColorQuery(prevColorQuery => prevColorQuery.replace(color.loose_variant, ''))
    }
  }

  return (
    <ul className="color-filter">
        {colorList && colorList.map(color => (
          <li
            key={color.symbol}
            className={classNames({
              'color-filter-item': true,
              'selected': isSelected(color)
            })}
            onClick={() => {
              handleColorClick(color)
            }}
          >
            <img src={color.svg_uri} alt={color.symbol}/>
          </li>
        ))}
      </ul>
  )
}

export default ColorFilter
  
import React, { useState, useEffect } from "react"
import { TypeFilterProps } from "./types"
import { useDispatch } from "react-redux"
import { setFilter } from "../../store/cardList/actions"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import "./TypeFilter.scss"

const typeList = ["all", "instant", "sorcery", "creature", "land"]

const TypeFilter: React.FC<TypeFilterProps> = () => {
  const dispatch = useDispatch()
  const [typeQuery, setTypeQuery] = useState("")
  const [typeString, setTypeString] = useState(typeList[0])

  useEffect(() => {
    dispatch(setFilter({ t: typeQuery !== 'all' ? typeQuery : '' }))
  }, [dispatch, typeQuery])

  const handleTypeClick = (type: string) => {
    setTypeString(type)
    setTypeQuery(type)
  }

  return (
    <div className="type-filter-container">
      <Select
        value={typeString}
        onChange={(event) => {
          handleTypeClick(event.target.value as string)
        }}
      >
        {typeList.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}

export default TypeFilter

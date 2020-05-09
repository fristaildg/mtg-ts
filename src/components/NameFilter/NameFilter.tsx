import React, { useState, useEffect } from "react"
import TextField from "@material-ui/core/TextField"
import "./NameFilter.scss"
import { useDispatch } from "react-redux"
import { setFilter } from "../../store/cardList/actions"
import _ from "lodash"

const NameFilter = () => {
  const dispatch = useDispatch()
  const [nameQuery, setNameQuery] = useState("")

  useEffect(() => {
    dispatch(setFilter({ name: nameQuery }))
  }, [dispatch, nameQuery])

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist()

    const debounced = _.debounce(() => {
      setNameQuery(event.target.value)
    }, 3000)

    debounced()
  }

  return (
    <TextField
      label="card name"
      id="cardName"
      className="name-filter"
      onChange={handleNameChange}
    />
  )
}

export default NameFilter

import React from "react"
import ColorFilter from "../ColorFilter"
import "./CardListFilters.scss"
import TypeFilter from "../TypeFilter"
import NameFilter from "../NameFilter"

const CardListFilters = () => {
  return (
    <React.Fragment>
      <p>Filter by color:</p>
      <ColorFilter />
      <p>Filter by type:</p>
      <TypeFilter />
      <p>Filter by name:</p>
      <NameFilter />
    </React.Fragment>
  )
}

export default CardListFilters

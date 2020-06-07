import React from 'react'
import { CardDetailProps } from './types'

import './CardDetail.scss'

const CardDetail: React.FC<CardDetailProps> = ({ cardInfo, onCloseClick, onNextClick, onPrevClick }) => {
  const {
    name,
    mana_cost,
    colors,
    set_name,
    image_uris
  } = cardInfo

  if (!cardInfo) return null

  return (
    <div className="card-detail">
      <img
        src={image_uris && image_uris.png}
        alt={name}
        className="card-detail-image"
      />
      <div className="card-detail-info">
        <div className="card-detail-header">
          <span className='prev-button'
            onClick={onPrevClick}
          >
            {'<'}
          </span>
          <span className='close-button'
            onClick={onCloseClick}
          >
            close X
          </span>
          <span className="next-button"
            onClick={onNextClick}
          >
            {'>'}
          </span>
        </div>
        <h2 className="card-detail-name">{name}</h2>
        <ul className="card-detail-info-list">
          <li>
            mana cost: {mana_cost}
          </li>
          <li>
            colors: {colors}
          </li>
          <li>
            set: {set_name}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CardDetail

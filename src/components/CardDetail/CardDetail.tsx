import React from 'react'
import { Card } from '../../store/cardList/types'

import './CardDetail.scss'

interface CardDetailProps {
  cardInfo: Card,
  onCloseClick: () => void
  onNextClick: () => void
  onPrevClick: () => void
}

const CardDetail: React.FC<CardDetailProps> = ({cardInfo, onCloseClick, onNextClick, onPrevClick}) => {
  const {
    name,
    mana_cost,
    colors,
    set_name,
    image_uris: {
      png
    }
  } = cardInfo

  return (
    <div className="card-detail">
      <img
        src={png}
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
  
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCards } from '../../store/cardList/actions'
import { Card } from '../../store/cardList/types'
import { ListingItem } from '../../store/deckList/types'
import CardList from '../CardList'
import Deck from '../Deck'

import './DeckBuilderPage.scss'

interface RootState {
  CardListReducer: {
    cardList: Card[],
    isLoading: boolean
  }
}

type Listing = ListingItem[] | []


const DeckBuilderPage: React.FC = () => {
  const cardList = useSelector((state: RootState) => state.CardListReducer.cardList)
  const isLoading = useSelector((state: RootState) => state.CardListReducer.isLoading)
  const dispatch = useDispatch()

  const [listing, setListing] = useState<Listing>([])

  useEffect(() => {
    dispatch(fetchCards())
  }, [dispatch])

  const handleAddToDeck = (card: Card) => {
    const newCard = {
      name: card.name,
      id: card.id,
      amount: 1
    }

    const listingIds = (listing as ListingItem[]).map((item: ListingItem) => item.id)

    if (listingIds.indexOf(newCard.id) !== -1) {
      const matchingCardIndex = listingIds.findIndex(item => newCard.id === item)
      const newListing = [...listing]
      const newCopy = listing[matchingCardIndex]
      
      newCopy.amount = newCopy.amount < 4 ? newCopy.amount + 1 : 4
      newListing[matchingCardIndex] = newCopy

      setListing(newListing)
    } else {
      setListing(prevListing => [...prevListing, newCard])
    }
  }

  const handleRemoveFromDeck = (card: ListingItem) => {
    if (card.amount > 1) {
      const listingIds = (listing as ListingItem[]).map((item: ListingItem) => item.id)
      const matchingCardIndex = listingIds.findIndex(item => item === card.id)
      const newListing = [...listing]
      const newCopy = listing[matchingCardIndex]
      
      newCopy.amount = card.amount - 1
      newListing[matchingCardIndex] = newCopy

      setListing(newListing)
    } else {
      setListing(listing.filter(item => item.id !== card.id))
    }
  }

  return (
    <div className='deck-builder-page'>
      <h2>Deck Builder</h2>
      <div className="card-list-wrapper">
        {isLoading ? <p>Loading cards...</p> : <CardList cardList={cardList} onAddCard={handleAddToDeck} />}
      </div>
      <div className="deck-wrapper">
        <Deck
          listing={listing}
          onRemoveCard={handleRemoveFromDeck}
        />
      </div>
    </div>
  )
}

export default DeckBuilderPage;
  
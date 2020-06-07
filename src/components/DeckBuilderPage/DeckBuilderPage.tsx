import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../../store/cardList/types'
import { ListingItem } from '../../store/deckList/types'
import CardList from '../CardList'
import Deck from '../Deck'
import DeckHeader from '../DeckHeader'
import { useParams } from 'react-router-dom'
import './DeckBuilderPage.scss'
import { getDeckById, clearDeck } from '../../store/deckList/actions'
import { RootState, Listing } from './types'

const DeckBuilderPage: React.FC = () => {
  const cardList = useSelector((state: RootState) => state.CardListReducer.cardList)
  const deck = useSelector((state: RootState) => state.DeckListReducer.deck)
  const dispatch = useDispatch()
  const { deckId } = useParams()

  const [listing, setListing] = useState<Listing>([])
  const [deckName, setDeckName] = useState('')

  useEffect(() => {
    if (deckId) {
      dispatch(getDeckById(deckId))
    }

    return () => {
      dispatch(clearDeck())
    }
  }, [dispatch, deckId])

  useEffect(() => {
    if (deck) {
      setListing(deck.listing)
      setDeckName(deck.name)
    }
  }, [deck])

  const handleAddToDeck = (card: Card) => {
    const newCard = {
      name: card.name,
      id: card.id,
      amount: 1,
      type: card.type_line
    }

    const listingIds = (listing as ListingItem[]).map((item: ListingItem) => item.id)

    if (listingIds.indexOf(newCard.id) !== -1) {
      const matchingCardIndex = listingIds.findIndex(item => newCard.id === item)
      const newListing = [...listing]
      const newCopy = listing[matchingCardIndex]

      newCopy.amount = (newCopy.amount < 4 || newCopy.type.indexOf('Basic Land') !== -1) ? newCopy.amount + 1 : 4
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
        <CardList cardList={cardList} onAddCard={handleAddToDeck} />
      </div>
      <DeckHeader
        deck={{
          listing,
          name: deckName,
          _id: deckId
        }}
      />
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

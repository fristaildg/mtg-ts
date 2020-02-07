const initState = {
  cardList: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_CARDS_SUCCESS': 
      console.log(action.payload)
      return {
        ...state,
        cardList: action.payload
      }
    default: 
      return state
  }
}
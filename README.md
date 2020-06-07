
TODO: 
      - [mtg-ts-backend] Refactor decks API endpoints (make 'getDecks' work with GET instead of POST)
      ALMOST DONE Rework login / register (auth0?)
      - Remove old node.js User integration
      ALMOST DONE [mtg-ts-backend] Integrate Auth0 users to Mongodb for deck associations
      - create game board page ('play match') that displays the selected deck
      - work on nice design
      - use styled-components (drop scss)
      - Refactor loading states (react Suspense?)
      - fix as much <any>s from typescript as possible
      DONE mark deck as selected on my decks page
      DONE refactor RootState interface used in useSelectors (can be centralized into 1 rootState for each reducer)
      DONE move component type definitions into a separate 'types.ts' file, like it is in the store folder
      DONE Refactor mtgApiCall (investigate error handling)
      DONE - clear selected deck on DeckBuilderPage unmount
      DONE - refactor actions (too much pending, success, etc for every action)
      DONE add pagination to cardList component
      DONE handle error when no cards found in CardList
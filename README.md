DONE mark deck as selected on my decks page
- create game board page ('play match') that displays the selected deck

TODO: - Refactor mtgApiCall (investigate error handling)
      - refactor RootState interface used in useSelectors (can be centralized into 1 rootState for each reducer)
      - move component type definitions into a separate 'types.ts' file, like it is in the store folder
      - Refactor loading states (react Suspense?)
      - Rework login / register (auth0?)
      - work on nice design
      - fix as much <any>s from typescript as possible
      DONE - clear selected deck on DeckBuilderPage unmount
      DONE - refactor actions (too much pending, success, etc for every action)
      DONE add pagination to cardList component
      DONE handle error when no cards found in CardList
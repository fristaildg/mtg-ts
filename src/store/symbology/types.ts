export const FETCH_COLORS = 'FETCH_COLORS'

export interface Symbol {
  [key: string]: any
  colors: string[]
}

interface FetchColorsAction {
  type: typeof FETCH_COLORS
  payload: any
}

export type SymbologyActionTypes = FetchColorsAction
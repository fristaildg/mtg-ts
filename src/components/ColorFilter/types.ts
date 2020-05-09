import { Symbol } from '../../store/symbology/types'

export interface RootState {
  SymbologyReducer: {
    colorList: Symbol[]
  }
}

export interface ColorFilterProps {
  // onColorChange: (colorQuery: string) => void
}
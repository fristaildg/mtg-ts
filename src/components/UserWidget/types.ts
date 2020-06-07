import { User } from '../../store/user/types'

export interface RootState {
  UserReducer: {
    user: User
  }
}

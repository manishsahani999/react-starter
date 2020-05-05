import { userConstants } from '../actions/constants';

let user = {
    jobs: []
}

export function userReducer(state = user, action) {
  switch (action.type) {
    case userConstants.GET_USER:
      const user = { ...action.payload }
      return user
    default:
      return state
  }
}
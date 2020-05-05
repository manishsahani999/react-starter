import { userConstants } from '../actions/constants';

let jwt = localStorage.getItem('token');
let isEmployer = localStorage.getItem('isEmployer');

const initialState = (jwt) ? { loggedIn: true, isEmployer: JSON.parse(isEmployer) } : { loggedIn: false, isEmployer: false };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggedIn: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        isEmployer: action.payload.isEmployer
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
      };
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
      };
    default:
      return state
  }
}
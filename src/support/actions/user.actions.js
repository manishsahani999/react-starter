import { userService } from "../services";
import { userConstants } from "./constants";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const login = (username, password) => {
  // const request = user => ({ type: userConstants.LOGIN_REQUEST, user });
  const success = (user) => ({
    type: userConstants.LOGIN_SUCCESS,
    payload: user,
  });
  const failure = (err) => ({ type: userConstants.LOGIN_FAILURE, err });

  return (dispatch) => {
    // dispatch(request({ username }));
    dispatch(showLoading());
    userService.login(username, password).then(
      (user) => {
          dispatch(hideLoading());
        dispatch(success(user));
        // history.push('/dashboard')
      },
      (err) => {
        dispatch(failure(err.toString()));
        // dispatch(hideLoading());
      }
    );
  };
};

const logout = () => {
   console.info('logout')
  userService.logout();
  return { type: userConstants.LOGOUT };
};

const getUser = () => {
  return (dispatch) => {
    dispatch(showLoading());
    userService.me().then(
      (user) => {
        dispatch({ type: userConstants.GET_USER, payload: user });
        setTimeout(() => {
          dispatch(hideLoading());
        }, 2000);
        return { type: userConstants.GET_USER, payload: user };
      },
      (err) => {
        console.error(err);
      }
    );
  };
};

export const userActions = {
  login,
  logout,
  getUser,
};

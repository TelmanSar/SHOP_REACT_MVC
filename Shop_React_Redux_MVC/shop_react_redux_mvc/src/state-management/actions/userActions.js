import {LOG_IN_TYPES, SIGN_UP_TYPES} from '../../core/constants/actionTypes'

//login
export const cntrlLogin = (userName, password) => ({
  type:LOG_IN_TYPES.CNTRL_LOG_IN,
  payload: {
      userName,
      password
  }
});

export const rxlLoginPending = payload => ({
    type:LOG_IN_TYPES.RX_LOG_IN_PENDING,
    payload
});

export const rxlLoginDone = payload => ({
    type:LOG_IN_TYPES.RX_LOG_IN_DONE,
    payload
});

//register
export const cntrlSignUp = payload => ({
    type:SIGN_UP_TYPES.CNTRL_SIGN_UP,
    payload
});

export const rxSignUpPending = payload => ({
    type:SIGN_UP_TYPES.RX_SIGN_UP_PENDING,
    payload
});

export const rxSignUpDone = payload => ({
    type:SIGN_UP_TYPES.RX_SIGN_UP_DONE,
    payload
});
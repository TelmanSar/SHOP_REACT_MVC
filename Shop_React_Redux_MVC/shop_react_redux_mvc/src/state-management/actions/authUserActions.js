import {LOG_IN_TYPES} from '../../core/constants/actionTypes'

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


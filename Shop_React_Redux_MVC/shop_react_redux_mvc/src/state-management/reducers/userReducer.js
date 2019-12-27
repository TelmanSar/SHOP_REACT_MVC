import { LOG_IN_TYPES, SIGN_UP_TYPES } from '../../core/constants/actionTypes';
import createAsyncReducer from '../../core/helpers/createAsyncReducer';

export const userReducer = createAsyncReducer(LOG_IN_TYPES.RX_LOG_IN, null);
export const registrationMessage = createAsyncReducer(SIGN_UP_TYPES.RX_SIGN_UP, null );


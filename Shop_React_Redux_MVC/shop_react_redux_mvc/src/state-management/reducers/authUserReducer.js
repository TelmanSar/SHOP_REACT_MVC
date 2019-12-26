import { LOG_IN_TYPES } from '../../core/constants/actionTypes';
import createAsyncReducer from '../../core/helpers/createAsyncReducer';

export const authUserReducer = createAsyncReducer(LOG_IN_TYPES.RX_LOG_IN, null);

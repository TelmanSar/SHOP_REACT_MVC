import createAsyncReducer from "../../core/helpers/createAsyncReducer";
import {ORDERS_TYPES} from "../../core/constants/actionTypes";

export const ordersReducer = createAsyncReducer(ORDERS_TYPES.RX_MAKE_ORDERS, null);

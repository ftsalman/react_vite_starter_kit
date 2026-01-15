import { configureStore } from "@reduxjs/toolkit";
import   userReducer   from  './reducers/userReducer';
import   networkReducer  from  './reducers/networkReducer';
import    productsReducer from  './reducers/productsReducer';
import  cartReducer    from './reducers/cartReducer';
import  notificationReducer  from  './reducers/notificationReducer';
export const store = configureStore({
  reducer: {
    sidebar: siderbarReducer,
    user: userReducer,
    network: networkReducer,
    products: productsReducer,
    cart: cartReducer,
    notification: notificationReducer,
   
  },
});

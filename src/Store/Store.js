import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";

const reHydrateStore = () => {
  if (localStorage.getItem("cartData") !== null) {
    return JSON.parse(localStorage.getItem("cartData")); // re-hydrate the store
  }
};

//MIDDLEWARE
const cartMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("cartData", JSON.stringify(getState()));
    return result;
  };
};

export const store = configureStore({
  reducer: cartSliceReducer,
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});

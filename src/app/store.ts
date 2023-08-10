import {configureStore} from "@reduxjs/toolkit";
import SearchModal from "../firstPage/variable/searchModalSlice";
export const store = configureStore({
  reducer: {
    SearchModal: SearchModal,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
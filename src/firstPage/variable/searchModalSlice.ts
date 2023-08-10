import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchModalState {
  showSearchModal: boolean;
  isAnimating: boolean;
}

const initialState: SearchModalState = {
  showSearchModal: false,
  isAnimating: true,
};

const searchModalSlice = createSlice({
  name: 'searchModal',
  initialState,
  reducers: {
    setSearchModalState: (state, action: PayloadAction<boolean>) => {
      state.showSearchModal = action.payload;
    },
    setIsAnimating: (state, action: PayloadAction<boolean>) => {
      state.isAnimating = action.payload;
    }
  },
});

export const { setSearchModalState, setIsAnimating } = searchModalSlice.actions;

export default searchModalSlice.reducer;

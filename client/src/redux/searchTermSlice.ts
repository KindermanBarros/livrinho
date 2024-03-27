import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchTermState {
  value: string;
}

const initialState: SearchTermState = {
  value: '',
};

export const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;

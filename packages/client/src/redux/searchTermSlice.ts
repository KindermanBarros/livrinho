import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import BookData from '../shared/interfaces/bookData';
import { fetchBooks } from '../shared/services/bookService';

interface SearchTermState {
  value: string;
  bookData: BookData[];
}

const initialState: SearchTermState = {
  value: '',
  bookData: [],
};

export const fetchBooksThunk = createAsyncThunk(
  'books/fetchBooks',
  async (searchTerm: string, { dispatch }) => {
    const books = await fetchBooks(searchTerm);
    return books;
  },
);

export const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooksThunk.fulfilled, (state, action) => {
      state.bookData = action.payload;
    });
  },
});

export const { setSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;

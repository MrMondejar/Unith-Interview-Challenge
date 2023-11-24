import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { Item } from './item'
import { RootState } from '../../app/store'
import axios from 'axios'

const itemsAdapter = createEntityAdapter<Item>({
  sortComparer: (a, b) => a.id - b.id
})

const initialState = itemsAdapter.getInitialState({
  status: 'idle',
  errorMessage: ''
})

export const fetchAPI = createAsyncThunk("items/fetchAPI", async () => {
  const response = await axios.get('http://54.73.73.228:4369/api/images')

  const itemsArray = Object.keys(response.data).map(key => {
    const newItem = {
      ...response.data[key],
      id: response.data[key].index,
      key: key
    }
    return newItem
  })

  return itemsArray
})

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    selectItem: (state, action) => {
      const item = state.entities[action.payload.id];
      if(item) { item.active = true }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAPI.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAPI.fulfilled, (state, action) => {
        state.status = "succeded"
        itemsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAPI.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.errorMessage = 'Specific error'
        } else {
          state.errorMessage = 'Unknown error'
        }
      })
  }
});

export const { selectItem } = itemsSlice.actions;

export default itemsSlice.reducer;

export const {
  selectAll: selectAllItems,
  selectById: selectItemById
} = itemsAdapter.getSelectors((state: RootState) => state.items)

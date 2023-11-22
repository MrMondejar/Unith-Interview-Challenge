import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { Item } from './item'

const itemsAdapter = createEntityAdapter<Item>()

const initialState = itemsAdapter.getInitialState({
  items: [],
  status: 'idle',
  error: ''
})

export function fetchItems() {
  const mock_data = [
    {
      id: 1,
      image: 'https://picsum.photos/id/4/200/300',
      title: 'title 1',
      description: 'desc1',
      selected: false
    },
    {
      id: 2,
      image: 'http://www.officialpsds.com/images/stocks/ALLEY-stock1502.jpg',
      title: 'title 2',
      selected: false
    },
    {
      id: 3,
      image: 'http://google.com',
      title: 'title 3',
      selected: false
    }
  ]

  return new Promise<{ data: Array<Item> }>((resolve) =>
    setTimeout(() => resolve({ data: mock_data }), 500)
  );
}

export const loadItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await fetchItems()
  return response.data
});

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(loadItems.pending, (state) => {
      state.status = "loading";
  })
  .addCase(loadItems.fulfilled, (state, action) => {
      state.status = "succeeded";
      itemsAdapter.upsertMany(state, action.payload);
  })
  .addCase(loadItems.rejected, (state) => {
      state.status = "failed";
  })
  }
});

export default itemsSlice.reducer;

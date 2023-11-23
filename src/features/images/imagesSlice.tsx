// import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
// import { RootState } from '../../app/store'
// import axios from 'axios'

// const itemsAdapter = createEntityAdapter<Item>()

// const initialState = itemsAdapter.getInitialState({
//   status: 'idle',
//   error: null
// })

// export function fetchItems() {
//   const mock_data = [
//     {
//       id: 1,
//       image: 'https://picsum.photos/id/4/200/300',
//       title: 'title 1',
//       description: 'desc1',
//       selected: false
//     },
//     {
//       id: 2,
//       image: 'http://www.officialpsds.com/images/stocks/ALLEY-stock1502.jpg',
//       title: 'title 2',
//       selected: false
//     },
//     {
//       id: 3,
//       image: 'http://google.com',
//       title: 'title 3',
//       selected: false
//     },
//     {
//       id: 4,
//       image: 'https://picsum.photos/id/4/200/300',
//       title: 'title 1',
//       description: 'desc1',
//       selected: false
//     },
//     {
//       id: 5,
//       image: 'http://www.officialpsds.com/images/stocks/ALLEY-stock1502.jpg',
//       title: 'title 2',
//       selected: false
//     },
//     {
//       id: 6,
//       image: 'http://google.com',
//       title: 'title 3',
//       selected: false
//     },
//     {
//       id: 7,
//       image: 'https://picsum.photos/id/4/200/300',
//       title: 'title 1',
//       description: 'desc1',
//       selected: false
//     },
//     {
//       id: 8,
//       image: 'http://www.officialpsds.com/images/stocks/ALLEY-stock1502.jpg',
//       title: 'title 2',
//       selected: false
//     },
//     {
//       id: 9,
//       image: 'http://google.com',
//       title: 'title 3',
//       selected: false
//     },
//     {
//       id: 10,
//       image: 'https://picsum.photos/id/4/200/300',
//       title: 'title 1',
//       description: 'desc1',
//       selected: false
//     },
//     {
//       id: 11,
//       image: 'http://www.officialpsds.com/images/stocks/ALLEY-stock1502.jpg',
//       title: 'title 2',
//       selected: false
//     },
//     {
//       id: 12,
//       image: 'http://google.com',
//       title: 'title 3',
//       selected: false
//     },
//     {
//       id: 12,
//       image: 'https://picsum.photos/id/4/200/300',
//       title: 'title 1',
//       description: 'desc1',
//       selected: false
//     },
//     {
//       id: 13,
//       image: 'http://www.officialpsds.com/images/stocks/ALLEY-stock1502.jpg',
//       title: 'title 2',
//       selected: false
//     },
//     {
//       id: 14,
//       image: 'http://google.com',
//       title: 'title 3',
//       selected: false
//     }
//   ]

//   return new Promise<{ data: Array<Item> }>((resolve) =>
//     setTimeout(() => resolve({ data: mock_data }), 500)
//   );
// }

// export const fetchImages = createAsyncThunk(
//   "items/fetchImages",
//   async () => {
//     const response = await axios.get('http://54.73.73.228:4369/api/images')
//     return response.data
//   }
// )

// export const loadItems = createAsyncThunk("items/fetchItems", async () => {
//   const response = await fetchItems()
//   return response.data
// });

// const itemsSlice = createSlice({
//   name: 'items',
//   initialState,
//   reducers: {
//     selectItem: (state, action) => {
//       const item = state.entities[action.payload.id];
//       if(item) { item.selected = true }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loadItems.pending, (state) => {state.status = "loading"})
//       .addCase(loadItems.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         itemsAdapter.upsertMany(state, action.payload);
//       })
//       .addCase(loadItems.rejected, (state) => {
//         state.status = "failed";
//       })
//       .addCase(fetchImages.pending, (state) => {
//         state.status = "loading";
//     })
//     .addCase(fetchImages.fulfilled, (state) => {
//         state.status = "succeeded";
//         postsAdapter.upsertMany(state, action.payload);
//     })
//     .addCase(fetchImages.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//     })
//     }
// });

// export const { selectItem } = itemsSlice.actions;

// export default itemsSlice.reducer;

// export const {
//   selectAll: selectAllItems
// } = itemsAdapter.getSelectors((state: RootState) => state.items)

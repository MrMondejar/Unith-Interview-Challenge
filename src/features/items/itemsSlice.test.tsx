import itemsReducer, {
  ItemsState,
  selectItem
} from './itemsSlice'

describe('counter reducer', () => {
  const initialState: ItemsState = {
    status: 'idle',
    errorMessage: '',
    entities: [],
    ids: []
  }

  it("should handle initial state", () => {
    expect(itemsReducer(undefined, { type: "unknown" }).entities).toHaveLength(initialState.entities.length);
  })
  
//   it('should handle selection of an item', () => {
//     const actualState = itemsReducer(
//       initialState,
//       selectItem()
//     );

//     expect(actualState.length).toEqual(initialState.length + 1);
//     const actualText = actualState[initialState.length].title;
//     const expectedText = "test-title";
//     expect(actualText).toEqual(expectedText);
//     });
// })
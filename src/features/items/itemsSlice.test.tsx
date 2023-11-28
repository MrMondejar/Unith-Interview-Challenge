import itemsReducer from './itemsSlice'

describe('counter reducer', () => {
  const initialState = []

  it("should handle initial state", () => {
    expect(itemsReducer(undefined, { type: "unknown" }).entities).toHaveLength(initialState.length);
  })
})

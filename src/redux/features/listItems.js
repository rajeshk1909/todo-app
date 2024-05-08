import { createSlice } from "@reduxjs/toolkit"

const data = localStorage.getItem("listItems")

const newData = data !== null ? JSON.parse(data) : []

const initialState = {
  listItems: newData,
}

const listItemsSlice = createSlice({
  name: "listItems",
  initialState,
  reducers: {
    setListItems: (state, action) => {
      state.listItems = action.payload
    },
  },
})

export const { setListItems } = listItemsSlice.actions

export default listItemsSlice.reducer

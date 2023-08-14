import { configureStore, createSlice } from "@reduxjs/toolkit"

const totalItems = createSlice({
  name : 'totalItems',
  initialState : [],
  reducers: {
    setTotalItems(state, action) {
      console.log(state);
      alert('settotal');
      return action.payload;
    }
  }
})

const first12Items = createSlice({
  name : 'first12Items',
  initialState : [],
  reducers: {
    setFirst12Items(state, action) {
      return action.payload;
    }
  }
})

const numShowItems = createSlice({
  name : 'numShowItems',
  initialState : 12,
  reducers: {
    setNumShowItems(state, action) {
      return action.payload;
    },
    incNumShowItems(state) {
      state += 12;
    }
  }
})

export default configureStore({
  reducer : {
    totalItems : totalItems.reducer,
    first12Items : first12Items.reducer,
    numShowItems : numShowItems.reducer
  }
})

export const { setTotalItems } = totalItems.actions;
export const { setFirst12Items } = first12Items.actions;
export const { setNumShowItems, incNumShowItems } = numShowItems.actions;
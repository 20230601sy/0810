import { configureStore, createSlice } from "@reduxjs/toolkit"

const totalItems = createSlice({
  name : 'totalItems',
  initialState : [],
  reducers: {
    setTotalItems(state, action) {
      return action.payload;
    }
  }
})

const showItems = createSlice({
  name : 'showItems',
  initialState : [],
  reducers: {
    setShowItems(state, action) {
      return action.payload;
    }
  }
})

const detailItem = createSlice({
  name : 'detailItem',
  initialState : [],
  reducers: {
    setDetailItem(state, action) {
      return action.payload;
    }
  }
})

const loginState = createSlice({
  name : 'loginState',
  initialState : 'logout',
  reducers: {
    setLoginState(state, action) {
      return action.payload;
    }
  }
})

export default configureStore({
  reducer : {
    totalItems : totalItems.reducer,
    showItems : showItems.reducer,
    detailItem : detailItem.reducer,
    loginState : loginState.reducer
  }
})

export const { setTotalItems } = totalItems.actions;
export const { setShowItems } = showItems.actions;
export const { setDetailItem } = detailItem.actions;
export const { setLoginState } = loginState.actions;
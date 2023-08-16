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

const detailItem = createSlice({
  name : 'detailItem',
  initialState : [],
  reducers: {
    setDetailItem(state, action) {
      return action.payload;
    }
  }
})

// const numShowItems = createSlice({
//   name : 'numShowItems',
//   initialState : { num : 12 }, // 그냥 숫자로 하면 안됨... 아무튼 안됨!
//   reducers: {
//     setNumShowItems(state, action) {
//       return action.payload;
//     },
//     incNumShowItems(state, action) {
//       state.num += 12;
//       if(state.num > Number(action.payload) && Number(action.payload) !== 0)
//         state.num = Number(action.payload);
//     }
//   }
// })

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
    detailItem : detailItem.reducer,
    // numShowItems : numShowItems.reducer
    loginState : loginState.reducer
  }
})

export const { setTotalItems } = totalItems.actions;
export const { setDetailItem } = detailItem.actions;
// export const { setNumShowItems, incNumShowItems } = numShowItems.actions;
export const { setLoginState } = loginState.actions;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Token, URL } from "../../api/const";
import api from "../../api/api";


// export const getCardInfo = createAsyncThunk(
//   'card-info',
//   async () => {
//     const res = await api(`/getCardInfo`)
//     const data = await res.data
//     return data
//   }
// )

const CardSlicer = createSlice({
  name: 'CardSlicer',
  initialState: {
    card: { cardNumber: '1234 5678 9012 3456', cardType: 'Uzcard', validThru: '08/25', owner: "John Doe" },
    isLoading: false,
    error: null
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getCardInfo.pending, (state) => {
  //     state.isLoading = true
  //   })
  //   builder.addCase(getCardInfo.fulfilled, (state, action) => {
  //     state.isLoading = false
  //     state.card = action.payload
  //   })
  //   builder.addCase(getCardInfo.rejected, (state, action) => {
  //     state.isLoading = false
  //     state.error = action.error.message
  //   })
  // }
})

export default CardSlicer.reducer
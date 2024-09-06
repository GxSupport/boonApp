import { createSlice } from "@reduxjs/toolkit";

const UserSlicer = createSlice({
  name: "user",
  initialState: {
    isUser: null,
    isFetching: false,
    error: null,
  },
  reducers: {
    setUser(state, action) {
      state.isUser = action.payload;
    },
    setFetching(state, action) {
      state.isFetching = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
})

export const { setUser, setFetching, setError } = UserSlicer.actions;

export default UserSlicer.reducer;
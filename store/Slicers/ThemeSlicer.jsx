import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../../utils/AsyncStorage";

export const toggleTheme = createAsyncThunk(
  'theme/toggleTheme',
  async (theme) => {
    await setItem('theme', theme);
    return theme;
  }
);

export const getTheme = createAsyncThunk(
  'theme/getTheme',
  async () => {
    const theme = await getItem('theme');
    return theme || 'light';
  }
);

export const ThemeSlicer = createSlice({
  name: "ThemeSlicer",
  initialState: {
    theme: "light",
  },
  extraReducers: (builder) => {
    builder.addCase(toggleTheme.fulfilled, (state, { payload }) => {
      state.theme = payload;
    });
    builder.addCase(getTheme.fulfilled, (state, { payload }) => {
      state.theme = payload;
    })
  }
})

export default ThemeSlicer.reducer

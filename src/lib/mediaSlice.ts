import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import data from "./data.json";

const initialState: IMedia[] = data;

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    bookmark: (state, action: PayloadAction<string>) => {
      const item = state.find((item) => item.title === action.payload);
      if (item) item.isBookmarked = !item.isBookmarked;
    },
  },
});

// Action creators are generated for each case reducer function
export const { bookmark } = mediaSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMovies = (state: RootState) =>
  state.media.filter((item) => item.category === "Movie");

export const selectTVSeries = (state: RootState) =>
  state.media.filter((item) => item.category === "TV Series");

export const selectTrending = (state: RootState) =>
  state.media.filter((item) => item.isTrending);

export const selectRecommended = (state: RootState) =>
  state.media.filter((item) => !item.isTrending);

export default mediaSlice.reducer;

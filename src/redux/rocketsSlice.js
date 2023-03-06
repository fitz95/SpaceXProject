import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetch', async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    list: [],
    isFetching: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        isFetching: false,
        list: action.payload,
      }))
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        isFetching: true,
      }));
  },
});

export default rocketsSlice.reducer;

export const selectRockets = (state) => state.rockets.list;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState: string = 'no';

export const localeSlice = createSlice({
  name: 'locale',
  initialState: initialState,
  reducers: {
    updateLocale: (_state, action: PayloadAction<string>) => action.payload,
  },
});

export const { updateLocale } = localeSlice.actions;
export const selectLocale = (state: RootState) => state.locale;
export default localeSlice.reducer;

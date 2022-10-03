import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '..';
import {StoreReducers} from '../types';

import {ReduxFormState, ReduxFormStatePayloadAction} from './types';

const initialState: ReduxFormState = {};

const reduxFormSlice = createSlice({
  name: StoreReducers.reduxForm,
  initialState,
  reducers: {
    setFormData(
      state,
      action: PayloadAction<ReduxFormStatePayloadAction>
    ) {
      const {formName, fieldName, value} = action.payload;
      const storeFormData = state[formName];

      if (storeFormData) {
        state[formName][fieldName] = value;
      } else {
        state[formName] = {[fieldName]: value};
      }
    },
    clearFormData(state, action: PayloadAction<string>) {
      state[action.payload] = {};
    },
  },
});

export const selectFormDataByName = (state: RootState) => (name: string) =>
  state.reduxForm[name];

const reduxFormActions = reduxFormSlice.actions;
const reduxFormReducer = reduxFormSlice.reducer;

export {reduxFormReducer, reduxFormActions};

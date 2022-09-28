import {createAsyncThunk, SerializedError} from '@reduxjs/toolkit';

import {AuthThunkTypePrefixes, User} from './type';

const fetchUser = createAsyncThunk<
  User,
  undefined,
  {rejectValue: SerializedError}
>(AuthThunkTypePrefixes.userFetch, async () => {
  const res = await fetch('/api/current_user');

  return await res.json();
});

export {fetchUser};

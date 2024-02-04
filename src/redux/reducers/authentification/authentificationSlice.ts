import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import loginWithGoogle from './actions/login/login';
import handleLoginPending from './actions/login/handleLogin/handleLoginPending';
import handleLoginRejected from './actions/login/handleLogin/handleLoginRejected';
import handleLoginSuccesfull from './actions/login/handleLogin/handleLoginSuccessfull';

const initialState = {
  isLoggedIn : false,
  user: null,
  loading:false,
  message: null,
};

const authSlice = createSlice({
  name: 'authentification',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(loginWithGoogle.pending, (state, action) =>
        handleLoginPending(state, action)
    );
    builder.addCase(loginWithGoogle.fulfilled, (state, action) =>
    handleLoginSuccesfull(state, action)
    );
    builder.addCase(loginWithGoogle.rejected, (state, action) =>
    handleLoginRejected(state, action)
    );
}});

export default authSlice.reducer;
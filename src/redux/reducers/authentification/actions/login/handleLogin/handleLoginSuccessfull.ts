const handleLoginSuccesfull = (state: any,action: any) => {
    state.loading = false;
    state.message = "Login succesfull";
    const user = action.payload;
    const userId = action.payload.user.uid;
    const email = action.payload.user.email;
    state.userId = userId;
    state.email = email;
    state.isLoggedIn = true;
    state.user = user;
}

export default handleLoginSuccesfull
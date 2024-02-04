const handleLoginRejected =  (state: any,action: any) => {
    state.isLoggedIn = false;
    state.message = "There was an error in the authentification process";
}

export default handleLoginRejected;
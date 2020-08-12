export const getAuth = (state) => state.auth
export const getUser = (state) => getAuth(state).user
export const getUserEmail = (state) => getUser(state).email
export const getToken = (state) => getAuth(state).token
export const getLoader = (state) => getAuth(state).loader
export const TOKEN_KEY = "@polenta-Token";
export const USER_EMAIL = "@email";
export const USER_ID = "@id";

export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => sessionStorage.getItem(TOKEN_KEY);

export const login = token => {
  sessionStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
};

export const setSession = email => {
sessionStorage.setItem(USER_EMAIL, email);
};

export const getSession = () =>{sessionStorage.getItem(USER_EMAIL); }

export const setUserId = user => {
  sessionStorage.setItem(USER_ID, user);
  };
  
export const getUserId = () => { sessionStorage.getItem(USER_ID); }
  x'
// Hide if login page

export const hideForLogin = ({ pathname }) => {
  let isLoginPage = false;
  if (pathname === "/login") isLoginPage = true;
  return isLoginPage;
};

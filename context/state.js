import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  // For when the left nav is open and closed at tablet and below
  const [leftNav, setLeftNav] = useState(false);
  const [leftNavCollapsed, setLeftNavCollapsed] = useState(false);

  return (
    <AppContext.Provider
      value={{ leftNav, setLeftNav, leftNavCollapsed, setLeftNavCollapsed }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

import { createContext, useReducer } from 'react';
import AppReducer, { initialState } from '../reducer/App.reducer';

type appProviderProps = { children: React.ReactNode };

export const AppContext = createContext({});

const AppProvider = ({ children }: appProviderProps) => {
  const useAppState = useReducer(AppReducer, initialState);
  return <AppContext.Provider value={[...useAppState]}>{children}</AppContext.Provider>;
};

export default AppProvider;

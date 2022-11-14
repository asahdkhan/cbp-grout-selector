import { useCallback, useContext } from 'react';
import { AppContext } from '../provider/App.context';

const useAppHooks = () => {
  const [appState, dispatch] = useContext<any>(AppContext);
  console.log('initiated');

  const toggleGreeting = useCallback(
    (value: boolean) => {
      dispatch({ type: 'toggleGreeting', payload: { value } });
    },
    [dispatch],
  );

  return { appState, toggleGreeting };
};

export default useAppHooks;

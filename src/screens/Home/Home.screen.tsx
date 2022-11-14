import { Button } from '@mui/material';
import useAppHooks from '../../hooks/App.hooks';

const HomeScreen = () => {
  const { appState, toggleGreeting } = useAppHooks();

  return (
    <div>
      <h2>Home</h2>
      <Button onClick={() => toggleGreeting(!appState.greet)}>Toggle</Button>
      <p>{appState.greet && 'Welcome To Grout'}</p>
    </div>
  );
};

export default HomeScreen;

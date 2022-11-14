import { ThemeProvider } from '@emotion/react';
import { HashRouter } from 'react-router-dom';
import Styles from './Global.styles';
import Screens from './screens';
import Theme from './Theme.styles';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Styles />
        <HashRouter>
          <Screens />
        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import theme from './theme';
import Home from './pages/Home';

function App() {
  return (
    <div >
      <ThemeProvider theme={theme}> 
      <Reset/>
      <Home/> 
      </ThemeProvider>
    </div>
  );
}

export default App;

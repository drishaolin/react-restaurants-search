import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import theme from './theme';
import Home from './pages/Home';

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div >
      <Title>React styled</Title>
      <ThemeProvider theme={theme}> 
      <Reset/>
      <Home/> 
      </ThemeProvider>
    </div>
  );
}

export default App;

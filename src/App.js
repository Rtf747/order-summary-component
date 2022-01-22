import Card from './components/Card';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body{
  margin: 0;
  padding: 0;
}
`;

function App() {
 return (
  <>
   <GlobalStyle />
   <Card />
  </>
 );
}

export default App;

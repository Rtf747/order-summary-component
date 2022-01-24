import Card from './components/Card';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: 'Red Hat Display', sans-serif;
  background-color: hsl(225, 100%, 94%);
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

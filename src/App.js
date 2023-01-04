import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/global';
import routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

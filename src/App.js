import { HelmetProvider } from 'react-helmet-async';
import './App.scss';
import RoutePage from './components/routes';

function App() {
  return (
    <HelmetProvider>
      <RoutePage />
    </HelmetProvider>
  );
}

export default App;

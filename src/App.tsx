import { Provider } from '@dhis2/app-runtime';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import { API_BASE_URL, API_VERSION } from './config/api';
import './App.css';
import MainCertificate from './components/certificate/main';
import { DataContextProvider } from './contexts/teiDataContext';
const appConfig = {
  baseUrl: API_BASE_URL,
  apiVersion: API_VERSION,
};
const App = () => {
  return (
    <Provider config={appConfig}>
      <div className='App'>
        {/* <Home /> */}
        <DataContextProvider>
          <Home />
        </DataContextProvider>
      </div>
    </Provider>
  );
};

export default App;

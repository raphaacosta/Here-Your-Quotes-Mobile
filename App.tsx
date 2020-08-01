import React from 'react';
import Routes from './src/routes';
import {ContextProvider} from './src/contexts/listContext';

export default function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}
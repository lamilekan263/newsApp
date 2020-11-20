import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from'react-redux'
import { ChakraProvider } from "@chakra-ui/react";

import store from './components/redux/store';




import App from "./App";

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={ store }>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);



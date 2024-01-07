import React from 'react';
import { Provider } from "react-redux"
import { store } from './Features/CartStore.jsx';
import HomePage from './Components/HomePage.jsx';
import CartPage from './Components/CartPage.jsx';
const App = () => {
  return (
    <div>
      <Provider store ={store}>
        <HomePage />
        <CartPage />
      </Provider>
    </div>
  );
};

export default App;
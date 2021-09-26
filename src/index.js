import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// код отвечающий за хранение и чтение контактов
// import { persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <PersistGate loading={null} persistor={persistor}> */}
//       <App />
//       {/* </PersistGate> */}
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

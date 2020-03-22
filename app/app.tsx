import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './modules/App';
// Cores
import FirebaseContext, { Firebase } from './modules/@core/Firebase';
// ConnectedRouterImport
import { ConnectedRouter } from 'connected-react-router';
import history from './utils/history';

import { Provider } from 'react-redux';
import configureStore from './configStore';
import LanguagePropvier from './modules/LanguagePropvier';
import GlobalStyle from './globalStyles';
// configureStore
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app') as HTMLElement;

ReactDOM.render(
  <FirebaseContext.Provider value={Firebase}>
    <Provider store={store}>
      <LanguagePropvier>
        <ConnectedRouter history={history}>
          <App />
          <GlobalStyle />
        </ConnectedRouter>
      </LanguagePropvier>
    </Provider>
  </FirebaseContext.Provider>,

  MOUNT_NODE,
);

declare const module: any;
if (module.hot) {
  module.hot.accept(['./i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
  });
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}

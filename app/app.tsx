import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './containers/App';

// ConnectedRouterImport
import { ConnectedRouter } from 'connected-react-router';
import history from './utils/history';

import { Provider } from 'react-redux';
import configureStore from './configStore';
import LanguagePropvier from './containers/LanguagePropvier';

// configureStore
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <LanguagePropvier>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </LanguagePropvier>
  </Provider>,
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

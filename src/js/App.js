import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import store from './store';
import Main from './components/Main';

// const locale = getCurrentLocale();
// addLocaleData(en);
// let messages;
// try {
//   messages = require(`./messages/${locale}`);
// } catch (e) {
//   messages = require('./messages/en-US');
// }
// const localeData = getLocaleData(messages, locale);

// if (window.location.pathname !== '/login') {
//   store.dispatch(initialize(window.location.pathname));
// }

export default () => (
  <Provider store={store}>
    <IntlProvider>
      <Main />
    </IntlProvider>
  </Provider>
);

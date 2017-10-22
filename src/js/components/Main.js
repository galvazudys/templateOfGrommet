import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';

import NotFound from '../screens/NotFound';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <App centered={false}>
        <Router>
          <Split
            priority={priority}
            flex="right"
            onResponsive={this._onResponsive}
          >
            <Switch />
          </Split>
        </Router>
      </App>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const select = state => ({
  nav: state.nav
});

export default connect(select)(Main);

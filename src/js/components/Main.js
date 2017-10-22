import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Article from 'grommet/components/Article';

import App from 'grommet/components/App';
import TopHeader from './Header';

class Main extends Component {
  render() {
    return (
      <App centered={false}>
        <Article>
          <Router>
            <div>
              <Route path='/' component={TopHeader} />
              <Switch />
            </div>
          </Router>
        </Article>
      </App>
    );
  }
}

// Main.propTypes = {   dispatch: PropTypes.func.isRequired };

const select = state => ({ nav: state.nav });

export default connect(select)(Main);

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BottomBar from '../components/BottomBar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      newsSummaries
    } = this.props;

    return (
      <div className="app">
        <BottomBar data={newsSummaries} />
      </div>
    )
  };
};

App.propTypes = {
  newsSummaries: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

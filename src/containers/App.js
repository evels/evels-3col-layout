import React, { Component, PropTypes } from 'react';
import * as data from '../constants/Data'

import BottomBar from '../components/BottomBar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'app'}>
        <BottomBar data={data.NEWS_SUMMARIES} />
      </div>
    )
  };
};

export default App;

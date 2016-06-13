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
        <h1>Using given json</h1>
        <BottomBar data={data.JSON["Articles"]} />
        <h1>Using mock data</h1>
        <BottomBar data={data.NEWS_SUMMARIES["Articles"]} />
      </div>
    )
  };
};

export default App;

import React, { Component, PropTypes } from 'react';

import NewsWidget from '../components/NewsWidget';

export default class BottomBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const bottomBarContent = data.map((article, index) =>
      <NewsWidget
        key={index}
        photoUrl={article.photoUrl}
        category={article.category}
        title={article.title}
        description={article.description}
        link={article.link}
        updated={article.updated} />);
    return (
      <div className="bottom_bar">
        {bottomBarContent}
      </div>
    )
  }
}

BottomBar.propTypes = {
  data: PropTypes.array.isRequired,
};

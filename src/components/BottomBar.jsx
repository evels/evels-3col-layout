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
        key={article.ArticleId}
        photoUrl={article.ThumbnailImageId}
        category={article.Category}
        title={article.Title}
        description={article.Body}
        link={article.ArticleId}
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

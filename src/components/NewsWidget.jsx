import React, { Component, PropTypes } from 'react';

export default class NewsWidget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photoUrl, category, title, description, link } = this.props;
    return (
      <div className="widget">
        <img src={photoUrl} />
        <span className={category}>{category}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    )
  }
}

NewsWidget.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

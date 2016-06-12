import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

export default class NewsWidget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photoUrl, category, title, description, link, updated } = this.props;
    const updatedText = updated ? ( <span>Updated {updated}</span>) : null;
    return (
      <div className="news_widget">
        <img src={photoUrl} />
        <span className={category}>{category}</span>
        <Link to={link}><h2>{title}</h2></Link>
        <p>{description} {updatedText}</p>
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
  updated: PropTypes.string,
};

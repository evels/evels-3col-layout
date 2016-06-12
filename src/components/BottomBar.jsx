import React, { Component, PropTypes } from 'react';

export default class BottomBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const bottomBarContent = data.map((product, idx) => {
      let length = product.properties.length;
      let properties = [];

      for (let i = 0; i < length; i++) {
        properties.push(<div key={`pv_${idx}_${i}`}>{product.properties[i].value}</div>);
      }

      return <div key={`p_${idx}`} className="product">{properties}</div>;
    });

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

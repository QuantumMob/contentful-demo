import React from 'react';

class Image extends React.Component {
  render() {
    const { data } = this.props
    if (!data) {
      return <div></div>
    }
    return (
      <img src={data.url} className="img-fluid"></img>
    );
  }
}

export default Image

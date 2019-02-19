import React from 'react';
import { Alert as ReactAlert } from 'reactstrap';


class Alert extends React.Component {
  render() {
    const { data } = this.props
    return (
      <ReactAlert color={data.color}>{data.text}</ReactAlert>
    );
  }
}

export default Alert

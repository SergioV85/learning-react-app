import React from 'react';
import PropTypes from 'prop-types';

export class CourseName extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>This pure component was created as a part of { this.props.courseName }</p>;
  }
}

CourseName.propTypes = {
  courseName: PropTypes.string,
};
CourseName.defaultProps = {
  courseName: '',
};
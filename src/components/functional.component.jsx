import React from 'react';
import PropTypes from 'prop-types';

export const Author = (props) => 
  <p className={props.cssClass} >The author of app with functional component is { props.author } and mentor is { props.mentor }</p>

Author.propTypes = {
  cssClass: PropTypes.string,
  author: PropTypes.string.isRequired,
  mentor: PropTypes.string.isRequired,
};
Author.defaultProps = {
  cssClass: 'text-muted',
};
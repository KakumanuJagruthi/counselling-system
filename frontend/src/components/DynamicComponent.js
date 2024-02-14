import React from 'react';
import PropTypes from 'prop-types';

const DynamicComponent = ({ data = [] }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

DynamicComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default DynamicComponent;

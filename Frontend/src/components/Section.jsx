import React from 'react';

const Section = ({ style, children }) => {
  return (
    <div className="bg-white rounded-small" style={{ ...style }}>
      {children}
    </div>
  );
};

export default Section;

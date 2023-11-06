import React from 'react';

const Section = ({ style, children }) => {
  return (
    <div className="rounded-small bg-background" style={{ ...style }}>
      {children}
    </div>
  );
};

export default Section;

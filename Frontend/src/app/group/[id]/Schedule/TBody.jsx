import React from 'react';
import Tr from './Tr';

const TBody = ({ questions, members }) => {
  return (
    <tbody>
      {members.map((member) => {
        return <Tr member={member} questions={questions} />;
      })}
    </tbody>
  );
};

export default TBody;

import React from 'react';

const questions = ['이름', 'BOJ1', 'BOJ2', 'BOJ3', 'BOJ4', 'BOJ5'];

const THead = () => {
  return (
    <>
      <thead>
        <tr className="bg-gray-800">
          {questions.map((question) => {
            return <th className="px-4 py-3 text-gray-300">{question}</th>;
          })}
        </tr>
      </thead>
    </>
  );
};

export default THead;

import React from 'react';

const THead = ({ questions }) => {
  return (
    <>
      <thead>
        <tr className="bg-gray-800">
          <th className="px-4 py-3 text-gray-300">이름</th>
          {questions.map((question) => {
            return (
              <th className="px-4 py-3 text-gray-300">
                {question.algorithmQuestPlatform}
                <br />
                {question.algorithmQuestNumber}
              </th>
            );
          })}
        </tr>
      </thead>
    </>
  );
};

export default THead;

import React from 'react';

const RankCard = ({ nickname, idx }) => {
  return (
    <div className="items-center w-20 mx-10">
      <img className="m-auto" src="/images/cogit.png" width={40} height={40} />
      <div className="px-4 py-3 ">{nickname}</div>
      <div className="px-4 text-center">{idx + 1} 등</div>
    </div>
  );
};

export default RankCard;

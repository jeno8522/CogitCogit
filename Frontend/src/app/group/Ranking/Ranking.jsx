'use client';

import React from 'react';
import Section from '../../../components/Section';
import RankCard from './RankCard';

const members = ['이현구', '연제정', '박성준', '주창훈', '박현철', '임하은'];

const Ranking = () => {
  return (
    <Section
      style={{
        width: '100%',
        display: 'inline-block',
        padding: '10px 20px 30px 20px',
      }}
    >
      <div className="block mb-5">
        <div className="m-4 text-xl font-bold text-left">랭킹</div>
        <div className="flex justify-center">
          {members.map((member, index) => (
            <RankCard nickname={member} index={index}></RankCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Ranking;

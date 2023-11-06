import React from 'react';
import Section from '../../Section';
import Table from './Table';
import Button from '../../Button';

const Schedule = () => {
  return (
    <Section
      style={{
        width: '40%',
        display: 'inline-block',
        padding: '10px 20px 30px 20px',
      }}
    >
      <div className="flex justify-between mb-5">
        <div className="m-4 text-xl font-bold text-left">일정 1</div>
        <div className="w-1/2 text-right">
          <Button className="items-center w-1/3 gap-1 p-5 m-1 bg-primary rounded-small">
            문제 추가
          </Button>
          <Button className="items-center w-1/3 gap-1 p-5 m-1 bg-primary rounded-small">
            일정 추가
          </Button>
        </div>
      </div>
      <Table></Table>
    </Section>
  );
};

export default Schedule;

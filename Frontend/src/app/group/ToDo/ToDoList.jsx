import React from 'react';
import Section from '@/components/Section';
import ToDo from './ToDo';

const memos = ['메모입니다', '메모입니다2', '메모입니다3'];

const ToDoList = () => {
  return (
    <Section
      style={{
        width: '40%',
        height: '500px',
        display: 'inline-block',
        padding: '20px',
        margin: '20px 0px 20px 10px',
      }}
    >
      <div className="m-4 text-xl font-bold text-left">ToDo</div>
      {memos.map((memo) => {
        return <ToDo memo={memo} />;
      })}
    </Section>
  );
};

export default ToDoList;

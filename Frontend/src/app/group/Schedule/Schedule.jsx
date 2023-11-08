import React from 'react';
import { Section } from '@/components/Section';
import TBody from './TBody';
import THead from './THead';
import Button from '@/components/Button';
import ScheduleIcon from '@/icons/schedule.svg';

const Schedule = () => {
  return (
    <Section className="w-[60%] h-full inline-block p-[20px] my-[20px] mr-[10px] overflow-auto">
      <div className="flex justify-between mb-3">
        <Section.Title className="justify-between mt-3">
          <div className="flex">
            <ScheduleIcon width={36} height={36} />
            <p className="ml-2">일정 1</p>
          </div>
        </Section.Title>
        <Section.ButtonList>
          <Button className="items-center p-5 m-1 bg-primary rounded-small">문제 추가</Button>
          <Button className="items-center p-5 m-1 bg-primary rounded-small">일정 추가</Button>
        </Section.ButtonList>
      </div>
      <Section.Container>
        <table className="w-[90%] text-center m-auto">
          <THead></THead>
          <TBody></TBody>
        </table>
      </Section.Container>
    </Section>
  );
};

export default Schedule;

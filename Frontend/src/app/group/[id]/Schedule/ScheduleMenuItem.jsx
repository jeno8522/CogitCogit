import React from 'react';

function ScheduleMenuItem({ scheduleId, scheduleName, onClickSelectSchedule, onCloseMenu }) {
  const onClickSelect = () => {
    onCloseMenu();
    onClickSelectSchedule(scheduleId);
  };

  return <div onClick={onClickSelect}>{scheduleName}</div>;
}
export default ScheduleMenuItem;

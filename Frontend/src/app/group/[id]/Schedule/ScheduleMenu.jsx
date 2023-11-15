import React, { useState } from 'react';

function ScheduleMenu({ onClickSelectSchedule, scheduleList }) {
  const [value, setValue] = useState();

  const selectChange = (e) => {
    setValue(e.target.value);
    onClickSelectSchedule(e.target.value);
  };

  return (
    <select
      name="selectSchedule"
      value={value}
      className="mr-5 text-center bg-primary rounded-small"
      onChange={selectChange}
    >
      {scheduleList.map((schedule) => {
        return (
          <option value={`${schedule.id}`} className="bg-white rounded-small">
            {schedule.name}
          </option>
        );
      })}
    </select>
  );
}
export default ScheduleMenu;

'use client';

import React from 'react';
import Ranking from './Ranking/Ranking';
import Schedule from './Schedule/Schedule';
import ToDoList from './ToDo/ToDoList';

function page() {
  return (
    <div className="m-10">
      <div className="flex justify-center w-full">
        <Ranking />
      </div>
      <div className="flex justify-between w-full">
        <Schedule />
        <ToDoList />
      </div>
    </div>
  );
}

export default page;

import React from 'react';
import Task from './Task';

const TaskList = ({ title, tasks, handleDragStart, handleDragEnd, handleDragOver, handleDrop }) => {
  return (
    <div
      className="block bg-green-300"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      data-title={title}
    >
      <h2 className='text-xl pl-8'>{title}</h2>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

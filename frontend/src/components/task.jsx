import React from 'react';

function task({ task }) {
  return (
    <div>
      <input type="checkbox" />
      <spam>{task.text}</spam>
      <button type="button">Apagar</button>
    </div>
  );
}

export default task;

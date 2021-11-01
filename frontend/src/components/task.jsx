import React from 'react';
import PropTypes from 'prop-types';

function Item({ item, updateTask, deleteTask }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={!item.active}
        onClick={() => { updateTask({ ...item, active: !item.active }); }}
      />
      <spam>{item.text}</spam>
      <button type="button" onClick={() => { deleteTask(item); }}>Apagar</button>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
}.isRequired;

export default Item;

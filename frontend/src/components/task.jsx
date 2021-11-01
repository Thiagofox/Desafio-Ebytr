import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Item({ item, updateTask, deleteTask }) {
  const [tempText, setTempText] = useState([]);

  return (
    <div>
      <input
        type="checkbox"
        checked={!item.active}
        onClick={() => { updateTask({ ...item, active: !item.active }); }}
      />
      {((item.edit) || item.text === '')
        ? (
          <input
            type="text"
            placeholder={item.text}
            onChange={(event) => { setTempText(event.target.value); }}
            onBlur={() => { updateTask({ ...item, text: tempText, edit: false }); }}
          />
        )
        : (
          <spam
            onClick={() => updateTask({ ...item, edit: true })}
            style={item.active ? {} : { textDecoration: 'line-through' }}
          >
            {item.text}
          </spam>
        )}

      <button type="button" onClick={() => { deleteTask(item); }}>Apagar</button>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
}.isRequired;

export default Item;

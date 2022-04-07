/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { userDispatch } from 'react-redux';
import { changeColor } from '../features/theme';

function ChangeColor() {
  const [color, setColor] = useState('');
  const dispatch = userDispatch();
  return (
    <div>
      <input type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button onClick={() => {
        dispatch(changeColor(color));
      }}
      > Change Color
      </button>

    </div>

  );
}

export default ChangeColor;

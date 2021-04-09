import React from 'react';
import './FormField.css';

function FormField({ label, ...props }) {
  return (
    <div
      className='formField'
    >
      <label className="formField-label">
        <span>{label}</span>
        <input
          className="formField-input"
          autoComplete="off"
          {...props}
        ></input>
      </label>
    </div>
  );
}

export default FormField;

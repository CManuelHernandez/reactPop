import React from 'react';

function Checkbox({ className, text, ...props }) {

    const [name, disabled, onChange] = Object.values({...props});

    return (
        <label 
            className={className}
            disabled={disabled}
        >
            <input 
                type="checkbox"
                disabled={disabled}
                name={name}
                onChange={onChange}
            />
            {text}
        </label>
    );
}

export default Checkbox;
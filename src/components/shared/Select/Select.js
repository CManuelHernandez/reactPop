import React from 'react';

function Select({ tags, ...props }) {
    return (
        <>
            <br/>
            <select name="tags" {...props}>
                {tags.map(tag => { 
                    return  <option 
                                key={tag}
                                value={tag}>
                                {tag}
                                </option>}
                            )}
            </select>
            <br/>
        </>
    );
}

export default Select;
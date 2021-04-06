import React from 'react';

import Add from './Add';

const AddList = (props) => {
  return (
    <ul className="add-list">
      <Add {...props} />
    </ul>
  );
};

export default AddList;
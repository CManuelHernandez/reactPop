import React from 'react';
import Button from '.././Button';
import './ConfirmationAux.css';

const ConfirmationAux = (props) => {

  const handleClickYes = async () => {
    props.onDisplayAux(true);
    props.onConfirm(true);
  };

  const handleClickNo = () => {
    props.onDisplayAux(false);
    props.onConfirm(false);
  };

  return (
    <>
      <hr/>
      <div>
        <p>{props.confirmationText}</p>
        <Button
          onClick={handleClickYes}  
        >
          Yes
        </Button>
        <Button
          onClick={handleClickNo}
        >
          No
        </Button>
      </div>
    </>
  );
};

export default ConfirmationAux;

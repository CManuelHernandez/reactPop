import React from 'react';
import { useHistory } from 'react-router-dom';
import { deleteAdd } from '../../api/adds';
import Button from './Button';
import './ConfirmationAux.css';

const ConfirmationAux = (props) => {
  const history = useHistory();

  const handleClickYes = async () => {
    await deleteAdd(props.addId);
    history.push('/');
  };

  const handleClickNo = () => {
    props.setConfirmation((oldValue) => !oldValue);
  };

  return (
    <>
      <hr/>
      <div>
        <p className="confirm-text">Are You sure you want to delete this Add</p>
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

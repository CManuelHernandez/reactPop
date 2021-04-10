import React from 'react';
import { getTags } from '../../../api/adds';
import FormField from '../../shared/FormField';
import Button from '../../shared/Button';
import SelectTag from '../../shared/SelectTag';
import './CreateAddForm.css';

const CreateAddForm = ({ ...props }) => {
    const [inputValues, setInputValues] = React.useState({
        name: '',
        price: '',
        tags: [],
        photo: '',
    });

const [onSaleValue, onSaleInputProps] = useRadioButtons('sale');

const [tags, setTags] = React.useState([]);
  React.useEffect(() => {
    const getTagList = async () => {
    const tags = await getTags();
    setTags(tags);
  };
  getTagList();
}, []);

  const handleChange = (event) => {
    setInputValues( oldValue => {
      const newValue = event.target ?
      {
      ...oldValue,
      [event.target.name]: event.target.value,
      } :
      {
      ...oldValue,
      tags: event.length ? event : ''
      }

      return newValue;
  });
  };

  const handleChangeUploadImage = (event) => {
    if (event.target.files.length) {
      setInputValues((oldValues) => ({
        ...oldValues,
        photo: event.target.files[0],
      }));
    }
  };

  const handleSubmit = (event) => {
    inputValues.price = inputValues.price * 1;
    inputValues.sale = !!inputValues.sale;
    event.preventDefault();
    props.onSubmit(inputValues);
    setInputValues({
      name: '',
      price: '',
      sale: '',
      tags: [],
      photo: '',
    });
  };

  return (
    <form className="createNewAddForm" onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="name"
          label="Name: "
          value={inputValues.name}
          className="createNewAddForm-field"
          onChange={handleChange}
          autoFocus
        />
        <FormField
          type="number"
          name="price"
          label="Price: "
          value={inputValues.price}
          className="createNewAddForm-field"
          onChange={handleChange}
        />
      <label>Purpose</label>
      <fieldset>
        <label>
          Sell
          <input
            name="onSaleAdd"
            value={true}
            {...onSaleInputProps}
            className="createNewAddForm-radio"
            onChange={handleChange}
          />
        </label>
        <label>
          Buy
          <input
            name="onSaleAdd"
            value={false}
            {...onSaleInputProps}
            className="createNewAddForm-radio"
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <SelectTag 
        handleChange={handleChange} 
        setTagsForNew={setTags}
      />
      <input
        type="file"
        id="uploadFileButton"
        onChange={handleChangeUploadImage}
      >  
      </input>

      <Button 
        className="form-button" 
        onClick={handleSubmit}
      >
        Publish
      </Button>
    </form>
  );
};

function useRadioButtons(name) {
    const [value, setState] = React.useState(null);
  
    const handleChange = (event) => {
      setState(event.target.value);
    };
  
    const inputProps = {
      name,
      type: 'radio',
      onChange: handleChange,
    };
  
    return [value, inputProps];
};


export default CreateAddForm;

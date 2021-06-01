import React from 'react';

import CreateAddForm from '../CreateAddForm';

import { createAdd } from '../../../api/adds';
import Layout from '../../layout/Layout';
import { useHistory } from 'react-router';

const CreateNewAddPage = ({...props}) => {
  const history = useHistory();

  const handleSubmit = async (newAddData) => {
    try {
      const {id} = await createAdd(newAddData);
      history.push(`/advert/${id}`);
      // history.push('/');
      console.log('id',id)
    } catch (error) {
      console.error(error);
    }
    console.log('newAddData',newAddData)
  };
  

  return (
    <div>
      <Layout title="Post a new Add" {...props}>
        <CreateAddForm onSubmit={handleSubmit} />
      </Layout>
    </div>
  );
};

export default CreateNewAddPage;

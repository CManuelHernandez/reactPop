import React from 'react';

import CreateAddForm from '../CreateAddForm';

import { createAdd } from '../../../api/adds';
import Layout from '../../layout/Layout';
import { useHistory } from 'react-router';

const CreateNewAddPage = ({...props}) => {
  const history = useHistory();

  const handleSubmit = (newAddData) => {
    try {
      createAdd(newAddData);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
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

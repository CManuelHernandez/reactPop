import React from 'react';

import CreateAddForm from '../CreateAddForm';

import { createAdd } from '../../../api/adds';
import Layout from '../../layout/Layout';

const CreateNewAddPage = ({...props}) => {
  const handleSubmit = (newAddData) => {
    try {
      createAdd(newAddData);
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

import React from 'react';
import Layout from '../../layout/Layout';

const Page404= ({...props}) => {
  return (
      <Layout {...props}>
      <div
        style={{
          textAlign: 'center',
          fontSize: 48,
          fontWeight: 'bold',
        }}
      >
        404 | Not found page
      </div>
      </Layout>
  );
};

export default Page404;

import React from 'react';
import { getAddList } from '../../../api/adds';
import Layout from '../../layout/Layout';
import AddList from './AddList';


const EmptyList = () => {
    return (
      <>
        <p>It seems that right now there areno spots.</p>
        <p>Hurry up and be the first to create one.</p>
      </>
    );
  };

const AddListPage = ({ ...props }) => {
    const [addList, setAddList] = React.useState([]);
  
    React.useEffect(() => {
      getAddList().then(setAddList);//
    }, []);
  
    return (
      <Layout title="All adverts" {...props}>
           {addList.length ? (
           <AddList addList={addList} />         
         ) : (
          <EmptyList />
         )}
      </Layout>
    );
};

export default AddListPage;
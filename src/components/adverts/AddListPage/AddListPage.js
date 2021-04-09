import React from 'react';
import { getAddList } from '../../../api/adds';
import Layout from '../../layout/Layout';
import AddList from './AddList';
import { Link } from 'react-router-dom';
import Button from '../../shared/Button';


const EmptyList = () => {
    return (
      <>
        <strong><p>It seems that right now there areno spots.</p>
        <p>Hurry up and be the first to create one.</p></strong>
        <Button
          as={Link}
          to="/advert/new"
          variant="primary"
        >
          Create New Add
        </Button>
      </>
    );
  };

function AddListPage({ ...props }) {
  console.log('addlistProps', props)

  const [addList, setAddList] = React.useState([]);

React.useEffect(() => {
  getAddList().then(adverts => {
      // reverse order so that the new ones appear first
      return adverts.sort((advert1, advert2) => {
          return advert1.createdAt > advert2.createdAt ? -1 : 0;
      });
  }).then(setAddList);
}, []);
  
    return (
      <Layout title="React-Pop" {...props}>
           {addList.length ? (
           <AddList addList={addList} />         
         ) : (
          <EmptyList />
         )}
      </Layout>
    );
};

export default AddListPage;
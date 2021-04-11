import React from 'react';
import { getAddList, getTags } from '../../../api/adds';
import Layout from '../../layout/Layout';
import { FiltersForm } from '../../filters';
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

    const [addList, setAddList] = React.useState([]);
    const [tags, setTags] = React.useState([]);

    const beforeFilters = {
        name: '',
        minPrice: null,
        maxPrice: null,
        sale: false,
        purchase: false,
        tags: []
    };

    const getAdds = (filters) => {
        return getAddList(filters).then(adverts => {
            return adverts.sort((advert1, advert2) => {
                return advert1.createdAt > advert2.createdAt ? -1 : 0;
            });
        })
    }

    const handleSubmit = async filters => {
        try {
            await getAdds(filters).then(setAddList);
        } catch (error) {
            console.error(error);
        }
    };

    const filterProps = {
        beforeFilters: beforeFilters,
        tags: tags,
        onSubmit: handleSubmit
    };

    React.useEffect(() => {
        getAdds(beforeFilters).then(setAddList);
        getTags().then(setTags);
    }, []);    

    return (
      <Layout title="React-Pop" {...props}>
            <FiltersForm {...filterProps}/>
            <hr/>
           {addList.length ? (
           <AddList addList={addList} />         
         ) : (
          <EmptyList />
         )}
      </Layout>
    );
};

export default AddListPage;
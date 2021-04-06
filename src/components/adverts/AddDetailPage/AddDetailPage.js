import React from 'react';
import { getAdd } from '../../../api/adds';
import Layout from '../../layout/Layout';
import NoImg from '../../../assets/noimg.png';


const AddDetailPage = ({...props}) => {
  console.log(props)
  const [add, setAdd] = React.useState({});
  const addId = props.match.params.id;
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  React.useEffect(() => {
    getAdd(addId)
      .then((addvert) => setAdd(addvert))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Layout title="Deta" {...props}>
      <article className="add-detail-container">
        <h2 className="add-detail-title">{add.name}</h2>
        <img src={add.photo ? `${baseUrl}${add.photo}` : NoImg} />
        <p>{add.price} €</p>
        <p>{add.tags}</p>
        <p>{add.sale}</p>
        {/* delete button */}
      </article>
      </Layout>
     </>    
  );
};

export default AddDetailPage;

import React from 'react';
import { getAdd } from '../../../api/adds';
import Layout from '../../layout/Layout';
import NoImg from '../../../assets/noimg.png';
import Button from '../../shared/Button';



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
      <div className="add-list-container">
      <div className="add">
              <div className="posts-list">
              <div className="ad-image">
                <img src={add.photo ? `${baseUrl}${add.photo}` : NoImg} />
              </div>
              <div className="ad-info">
                <div className="ad-main-info">
                  <p>{add.name}</p>
                </div>
                <div className="ad-state">
                  <p>{add.sale ? 'On sale' : 'Purchase'}</p>
                </div>
                <div className="ad-decription">
                  <p><strong>Category:</strong> {add.tags}</p>
                </div>
                <div className="ad-price">
                  <p>{add.price} €</p> 
                </div>

                  <Button>Borrar</Button>

                        
                </div> 
              </div>
            
              </div>
    </div>
      </Layout>
     </>    
  );
};

export default AddDetailPage;

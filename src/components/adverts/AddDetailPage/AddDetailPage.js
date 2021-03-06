import React from 'react';
import { getAdd, deleteAdd } from '../../../api/adds';
import Layout from '../../layout/Layout';
import NoImg from '../../../assets/noimg.png';
import Button from '../../shared/Button';
import ConfirmationAux from '../../shared/ConfirmationAux';
import Tags from '../Tags';
import { useHistory } from 'react-router';
import './AddDetailPage.css';

const AddDetailPage = ({...props}) => {
  const [add, setAdd] = React.useState(null);

  const addId = props.match.params.id;
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const [confirmation, setConfirmation] = React.useState(false);
  const history = useHistory();
  
  const handleClickConfirmation = () => {
    setConfirmation(!confirmation);
  };

  const deleteAddConfirm = async (confirmDeletion) => {
    if (confirmDeletion) {
      await deleteAdd(addId);
      history.push('/');
    }
  };


  React.useEffect(() => {
    getAdd(addId)
      .then((addvert) => setAdd(addvert))
      .catch((error) => {
        console.error(error);
        if (error.statusCode === 404) {
          return history.push('/404');
        }
      });
  }, []);
    
  return (
    add && (

    <Layout title="Add on Detail" {...props}>
      <div className="add-detail-list-container">
        <div className="ad-detail">
          <div className="posts-list">
            <div className="ad-detail-image">
              <img src={add.photo ? `${baseUrl}${add.photo}` : NoImg} alt={add.name}/>
            </div>
            <div className="ad-info">
              <div className="ad-main-info">
                <p>{add.name}</p>
              </div>
              <div className="ad-state">
                <p>{add.sale ? 'On sale' : 'Purchase'}</p>
              </div>
              <div className="ad-decription">
                <p><strong>Category:</strong></p>
                <Tags tagsArray={add.tags} />
              </div>
              <hr/>
              <div className="ad-price">
                <p>{add.price} €</p> 
              </div>           
            </div> 
          </div>
          <Button
            onClick={handleClickConfirmation}
          >
            Delete Add
          </Button>
            {confirmation && (
              <ConfirmationAux
                onDisplayAux={setConfirmation}
                onConfirm={deleteAddConfirm}
                confirmationText={
                  <p className="confirm-text">
                    Are You sure you want to delete this Add
                  </p>
              } 
              />
            )}
        </div>
      </div>
    </Layout>
    )
  );
};

export default AddDetailPage;

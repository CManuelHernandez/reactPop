import React from 'react';
import { getAdd } from '../../../api/adds';
import Layout from '../../layout/Layout';
import NoImg from '../../../assets/noimg.png';
import Button from '../../shared/Button';
import ConfirmationAux from '../../shared/ConfirmationAux';
import './AddDetailPage.css';



const AddDetailPage = ({...props}) => {
  const [add, setAdd] = React.useState({});
  const addId = props.match.params.id;
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const [confirmation, setConfirmation] = React.useState(false);

  const handleClickConfirmation = () => {
    setConfirmation((oldValue) => !oldValue);
  };

  React.useEffect(() => {
    getAdd(addId)
      .then((addvert) => setAdd(addvert))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Layout title="Deta" {...props}>
      <div className="add-detail-list-container">
        <div className="ad-detail">
          <div className="posts-list">
            <div className="ad-detail-image">
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
                addId={add.id} 
                setConfirmation={setConfirmation} 
              />
            )}
        </div>
      </div>
    </Layout>
  );
};

export default AddDetailPage;

import React from 'react';

import './Add.css';
import Button from '../../shared/Button';
import { Link } from 'react-router-dom';
import NoImg from '../../../assets/noimg.png';

const Add = (props) => {
  const handleAddId = () => {};
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  return (
      <div className="add-list-container">
        {props.addList.map((add) => {
          return ( 
            <li key={add.id} className="ad">  
              <div className="posts-list">
                <div className="ad-image">
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

                <Link to={`/advert/{add.id}`}>
                  <Button>See in Detail</Button>
                </Link>

                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </div>
  );
};

export default Add;

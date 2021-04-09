import React from 'react';

import Button from '../../shared/Button';
import { Link } from 'react-router-dom';
import Tags from '../Tags';
import NoImg from '../../../assets/noimg.png';
import './Add.css';

const Add = (props) => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  return (
    <div className="add-list-container">
        {props.addList.map((add) => {
          return (
            <li key={add.id} className="ad">
              <div className="posts-list">
              <div className="ad-image">
                <img src={add.photo ? `${baseUrl}${add.photo}` : NoImg} alt={add.name} />
              </div>
              <div className="ad-info">
                <div className="ad-main-info">
                  <p>{add.name}</p>
                </div>
                <div className="ad-state">
                  <p>{add.sale ? 'On sale' : 'Purchase'}</p>
                </div>
                <div className="ad-decription">
                  <p><strong>Tags: </strong> 
                  <Tags tagsArray={add.tags}/>
                  </p>
                </div>
                <hr/>
                <div className="ad-price">
                  <p>{add.price.toFixed(2).replace('.', ',')} €</p> 
                </div>
                <Link to={`/advert/${add.id}`}>
                  <Button>See in Detail</Button>
                </Link>                      
                </div> 
              </div>
            </li>
          );
        })}
    </div>
  );
};

export default Add;

import React from 'react';

import './Add.css';
import Button from '../../shared/Button';
import { Link } from 'react-router-dom';
import NoImg from '../../../assets/noimg.png';

const Add = (props) => {
  const handleAddId = () => {};
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  return (
    <article className="add">
      <div className="add-list-container">
        {props.addList.map((add) => {
          return (
            <li key={add.id}>
              <div className="add-container">
                <div>{add.name}</div>
                <img src={add.photo ? `${baseUrl}${add.photo}` : NoImg} />
                <div>{add.price.toFixed(2).replace('.', ',')} €</div>
                <div>Categorías: {add.tags}</div>
                <div>{add.sale ? '"Vendo"' : '"Compro"'}</div>
                <Link to={`/advert/${add.id}`}>
                  <Button>See in Detail</Button>
                </Link>
              </div>
            </li>
          );
        })}
      </div>
    </article>
  );
};

export default Add;

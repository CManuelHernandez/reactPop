import React from 'react';
import './AdvertsPage.css';
// import classnames from 'classnames';
// import Header from '../../layout/Header';
import Layout from '../../layout/Layout';
import { getLatestAdverts } from '../../../api/adverts';

const AdvertsPage = ({ className, ...props }) => {
  const [adverts, setAdverts] = React.useState([]);

  React.useEffect(() => {
    getLatestAdverts().then(setAdverts);
  }, []);

  const handleClick = () => {
    alert('Construyendo un enlace al detalle...');
  };

  const items = adverts.map(adverts => (
    <li 
      onClick={handleClick}
      key={adverts.id}
    >
      {adverts.name}, {adverts.price} {adverts.sale}, {adverts.tags}
    </li>
  ));

    //const items = adverts.map(adverts => <li key={adverts.id}>{adverts.name}, {adverts.price} {adverts.sale}, {adverts.tags}</li>)
    return (
      <Layout title="All adverts" {...props}>
        <div className="advertPage">
          <ul>{items}</ul>
        </div>
      </Layout>
    );
}

export default AdvertsPage;

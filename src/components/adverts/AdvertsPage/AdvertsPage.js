import React from 'react';
import './AdvertsPage.css';
import Header from '../../layout/Header';
import { getLatestAdverts } from '../../../api/adverts';


// const adverts = [
//     {
//       "id": "873961a9-3509-468d-a63b-c9e046a72d1d",
//       "createdAt": "2021-03-28T16:16:09.000Z",
//       "name": "coche",
//       "sale": true,
//       "price": 213,
//       "tags": [
//         "motor"
//       ],
//       "photo": null
//     },
//     {
//       "id": "b794071d-14e3-4a53-be63-dfdf7dee0703",
//       "createdAt": "2021-03-28T16:16:35.000Z",
//       "name": "moto",
//       "sale": false,
//       "price": 435,
//       "tags": [
//         "motor"
//       ],
//       "photo": null
//     },
//     {
//       "id": "ec56b3dd-493b-4b48-8bd3-592f042eb158",
//       "createdAt": "2021-03-28T16:17:27.000Z",
//       "name": "bici",
//       "sale": true,
//       "price": 12,
//       "tags": [
//         "lifestyle"
//       ],
//       "photo": null
//     }
//   ]



const AdvertsPage = () => {
  const [adverts, setAdverts] = React.useState([]);

  React.useEffect(() => {
    getLatestAdverts().then(setAdverts);
  }, []);

  const items = adverts.map(adverts => (
    <li 
      key={adverts.id}
    >
      {adverts.name}, {adverts.price} {adverts.sale}, {adverts.tags}
    </li>
  ));


    //const items = adverts.map(adverts => <li key={adverts.id}>{adverts.name}, {adverts.price} {adverts.sale}, {adverts.tags}</li>)
    return (
        <>
        <hr/>
        <Header />
        <div className="advertsPage">
            <h1>AdvertsPage</h1>
            <ul>{items}</ul>
        </div>
        </>
    )
}

export default AdvertsPage;

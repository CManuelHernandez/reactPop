import client from './client';

const addsBaseUrl = '/api/v1/adverts';

export const getTags = () => {
  const url = `${addsBaseUrl}/tags`;
  return client.get(url);
};

export const createAdd = (add) => {
  const url = `${addsBaseUrl}`;

  const file = new Blob([add.photo], { type: 'multipart/form-data' });
  const formData = new FormData();

  if (add.photo) {
    formData.append('photo', file);
  }
  formData.append('name', add.name);
  formData.append('sale', add.sale);
  formData.append('price', add.price);
  formData.append('tags', add.tags);

  return (
    client
      .post(url, formData)
      .then((data) => console.log('add image:', data.photo))
      .catch((error) => console.error(error))
  );
};

export const getAdd = (id) => {
  const url = `${addsBaseUrl}/${id}`;
  return client.get(url);
};

export const deleteAdd = (id) => {
  const url = `${addsBaseUrl}/${id}`;
  return client.delete(url);
};

export const getAddList = (filters) => {
  let url = '';
        
        if (filters.name) {
            url += `name=${filters.name}&`;
        }

        if (filters.sale && !filters.purchase) {
            url += 'sale=true&';
        } else if (!filters.sale && filters.purchase) {
            url += 'sale=false&';
        }

        if (filters.minPrice && !filters.maxPrice) {
            url += `price=${filters.minPrice}&`;
        } else if (filters.maxPrice && !filters.minPrice) {
            url += `price=0&price=${filters.maxPrice}&`;
        } else if (filters.minPrice && filters.maxPrice) {
            url += `price=${filters.minPrice}&price=${filters.maxPrice}&`;
        }

        if (filters.tags && filters.tags.length > 0) {
            filters.tags.forEach(tag => {
                url += `tags=${tag}&`;
            });
        }

        if (url) {
            return client.get(`${addsBaseUrl}?${url}`);
        }

        return client.get(addsBaseUrl);
};

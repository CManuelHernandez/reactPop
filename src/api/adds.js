import client from './client';

const addsBaseUrl = '/api/v1';

export const getTags = () => {
  const url = `${addsBaseUrl}/adverts/tags`;
  return client.get(url);
};

export const createAdd = (add) => {
  const url = `${addsBaseUrl}/adverts`;

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

export const getAddList = () => {
  const url = `${addsBaseUrl}/adverts`;
  return client.get(url);
};

export const getAdd = (id) => {
  const url = `${addsBaseUrl}/adverts/${id}`;
  return client.get(url);
};

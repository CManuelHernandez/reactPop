import client from './client';

const advertsBaseUrl = '/api';

export const getLatestAdverts = () => {
  const url = `${advertsBaseUrl}/v1/adverts`;
  return client.get(url);
};

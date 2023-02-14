export enum PageURL {
  IMAGES_LISTING = '/',
  PREDISCTION_LISTING = '/predictions',
  PREDICTION_DETAILS = '/predictions/:id',
}

export const getPageURL = (
  url: PageURL,
  params?: { [key: string]: string | number }
) => {
  if (!params) return url;

  return Object.keys(params).reduce(
    (acc, key) => acc.replace(`:${key}`, params[key].toString()),
    url
  );
};

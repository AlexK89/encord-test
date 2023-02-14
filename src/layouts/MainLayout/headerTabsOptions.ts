import { PageURL } from 'router/pageURL';
import { IHeaderMenuItem } from './types';

export const headerTabsOptions: IHeaderMenuItem[] = [
  {
    title: 'Images',
    link: PageURL.ROOT,
  },
  {
    title: 'Predictions',
    link: PageURL.PREDISCTION_LISTING,
  },
];

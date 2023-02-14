import {
  ImageListingPage,
  PredictionListingPage,
  PredictionDetailsPage,
} from 'pages';
import { IRouteProps } from './types';
import { PageURL } from './pageURL';
import { MainLayout } from 'layouts';

export const routes: IRouteProps[] = [
  {
    path: PageURL.IMAGES_LISTING,
    component: ImageListingPage,
    layout: MainLayout,
  },
  {
    path: PageURL.PREDISCTION_LISTING,
    component: PredictionListingPage,
    layout: MainLayout,
  },

  {
    path: PageURL.PREDICTION_DETAILS,
    component: PredictionDetailsPage,
    layout: MainLayout,
  },
];

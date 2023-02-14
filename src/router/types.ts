import { PageURL } from './pageURL';

export interface IRouteProps {
  component: React.FC<any>;
  layout?: React.FC<any>;
  path: PageURL;
}

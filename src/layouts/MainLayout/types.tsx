import { ReactNode } from 'react';
import { PageURL } from 'router/pageURL';

export interface MainLayoutProps {
  children: ReactNode;
}

export interface IHeaderMenuItem {
  title: string;
  link: PageURL;
}

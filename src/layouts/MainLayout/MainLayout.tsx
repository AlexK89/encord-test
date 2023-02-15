import { FC } from 'react';
import { Link } from 'react-router-dom';
import { headerTabsOptions } from './headerTabsOptions';
import { MainLayoutProps } from './types';

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <nav className={'flex justify-end bg-blue-500 p-4 align-middle'}>
        <ul className={'grid grid-cols-2 gap-4'}>
          {headerTabsOptions.map(({ title, link }, index) => (
            <li key={`nav-item-${index}`}>
              <Link
                to={link}
                className={
                  'rounded-sm p-2 text-center text-white transition hover:bg-blue-400'
                }
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
};

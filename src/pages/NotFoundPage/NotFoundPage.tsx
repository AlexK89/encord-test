import { Link } from 'react-router-dom';
import { Button } from 'components';
import { PageURL } from 'router/pageURL';

export const NotFoundPage = () => (
  <div className={'flex h-screen w-screen items-center justify-center'}>
    <div className={'relative h-2/3 w-2/3'}>
      <h3 className={'mb-8 w-2/3 text-6xl font-bold text-black'}>404</h3>
      <Link to={PageURL.ROOT} className={'no-underline'}>
        <Button variant={'contained'} color={'primary'} disableElevation>
          Back to Home
        </Button>
      </Link>
    </div>
  </div>
);

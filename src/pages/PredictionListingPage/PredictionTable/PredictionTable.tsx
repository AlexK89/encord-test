import { Link } from 'react-router-dom';
import dayJs from 'dayjs';
import { Button, Table } from 'components';
import { ImageType } from 'types';
import { getPageURL, PageURL } from 'router/pageURL';
import { PredictionTableProps } from './types';

export const PredictionTable: React.FC<PredictionTableProps> = ({
  predictedImages,
}) => {
  const columns = [
    { id: 'title', label: 'Title' },
    { id: 'description', label: 'Description' },
    { id: 'createdAt', label: 'Predicted at' },
    { id: 'cta', label: '' },
  ];

  const formattedPredictionRows = predictedImages.map((image: ImageType) => {
    return {
      id: image.id,
      cells: [
        image.title,
        image.description,
        image.predictionsData?.createdAt &&
          dayJs(image.predictionsData.createdAt).format('DD/MM/YYYY HH:mm'),
        <Link
          key={`cta-${image.id}`}
          to={getPageURL(PageURL.PREDICTION_DETAILS, { id: image.id })}
        >
          <Button variant="contained">View</Button>
        </Link>,
      ],
    };
  });

  return <Table rows={formattedPredictionRows} columns={columns} />;
};

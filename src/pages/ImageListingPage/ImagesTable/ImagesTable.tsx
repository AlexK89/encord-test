import { Table } from 'components/common';

export const ImagesTable = () => {
  const columns = [
    { id: 'fileName', label: 'File Name' },
    { id: 'fileSize', label: 'Size' },
    { id: 'uploadedAt', label: 'Uploaded At' },
    { id: 'cta', label: '' },
  ];

  return (
    <div className={'mt-8'}>
      <Table rows={[]} columns={columns} />
    </div>
  );
};

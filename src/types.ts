export type ImageType = {
  id: string;
  file: File;
  isPredicted: boolean;
  prediction?: any[];
  title?: string;
  description?: string;
};

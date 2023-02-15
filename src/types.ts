export type ImageType = {
  id: string;
  file: File;
  isPredicted: boolean;
  prediction?: Record<string, any>;
  title?: string;
  description?: string;
};

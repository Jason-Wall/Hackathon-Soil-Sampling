import { Document } from 'mongodb';
import { SoilSamplesStorage } from '../application/providers/data-parser/data-parser.provider.types';

interface SoilSampleDocument extends Document, Omit<SoilSamplesStorage, 'id'> {}

const toSoilSampleObject = (soilSample: SoilSampleDocument): SoilSamplesStorage => {
  return {
    name: soilSample.name,
    samples: soilSample.samples,
  };
};

export { SoilSampleDocument, toSoilSampleObject };

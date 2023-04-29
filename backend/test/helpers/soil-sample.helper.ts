import { ObjectId } from 'bson';
import { CreateSampleSoilDataInput } from '../../src/application/providers/data-parser/data-parser.provider.types';
import { SoilSampleDocument } from '../../src/entities/soil-sample';

const createMockSampleSoilDataInput = (data?: Partial<CreateSampleSoilDataInput>): CreateSampleSoilDataInput => {
  return {
    id: new ObjectId().toHexString(),
    name: 'teeeest',
    csvContent: btoa(`Size (mm),Cumulative Percentage
0.1,2.3
0.5,11
1,25.2
2.5,45.3
5,73.7
10,93.5
50,98.5
100,100
200,100`),
    ...data,
  };
};

const createMockSoilSampleDocument = (data?: Partial<SoilSampleDocument>): SoilSampleDocument => {
  return {
    _id: new ObjectId(),
    name: 'Jason Momoa',
    samples: [
      {
        size: 1.5,
        cumulativePercentage: 3.5,
      },
    ],
    ...data,
  };
};

export { createMockSampleSoilDataInput, createMockSoilSampleDocument };

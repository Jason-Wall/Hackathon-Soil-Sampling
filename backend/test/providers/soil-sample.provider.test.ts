import { Collection } from 'mongodb';

import { reveal, stub } from 'jest-auto-stub';
import { DataParserProvider } from '../../src/application/providers/data-parser/data-parser.provider';
import { createMockSampleSoilDataInput, createMockSoilSampleDocument } from '../helpers/soil-sample.helper';
import { SoilSampleDocument } from '../../src/entities/soil-sample';
import { SoilSampleRepository } from '../../src/application/repositories/soil-sample/soil-sample.repository';

const stubSoilSampleCollection = stub<Collection<SoilSampleDocument>>();

const soilSampleRepository = new SoilSampleRepository(stubSoilSampleCollection);
const dataParserProvider = new DataParserProvider(soilSampleRepository);

beforeEach(jest.clearAllMocks);

describe('dataParserProvider', (): void => {
  const csvRequest = createMockSampleSoilDataInput();

  describe('processCsv', (): void => {
    const validSoilSample = createMockSoilSampleDocument({ name: 'test client' });

    beforeEach(() => {
      reveal(stubSoilSampleCollection).findOneAndUpdate.mockImplementation(() => ({ value: validSoilSample }));
    });
    test('should call findOneAndUpdate once', async () => {
      await dataParserProvider.processCsv(csvRequest);

      expect(stubSoilSampleCollection.findOneAndUpdate).toHaveBeenCalledTimes(1);
    });

    test('should successfully parse csv', async () => {
      const result = await dataParserProvider.processCsv(csvRequest);

      expect(result).toEqual({
        id: csvRequest.id,
        success: true,
      });
    });
  });
});

import { gql } from 'apollo-server-core';

import { dataParserResolver } from '../../src/application/resolvers/data-parser.resolver';
import { dataParserProvider } from '../../src/application/providers';
import { typeDefs } from '../../src/application/schema/index';
import { MutationParseSoilSamplingCsvArgs } from '../../src/application/schema/types/schema';

import { TestClient } from '../helpers/client.helper';
import { createMockSampleSoilDataInput } from '../helpers/soil-sample.helper';

let client: TestClient;

jest.mock('../../src/application/database', () => ({
  setupDb: (): any => ({ collection: (): any => jest.fn() }),
}));

beforeAll(async (): Promise<void> => {
  client = new TestClient(typeDefs, dataParserResolver);
});

beforeEach(async (): Promise<void> => {
  jest.restoreAllMocks();
});

describe('clientSurveyResolver', (): void => {
  describe('Mutation', () => {
    describe('createClientSurvey', () => {
      const mutation = gql`
        mutation ($input: SendCsvInput!) {
          parseSoilSamplingCsv(input: $input) {
            id
            success
            errors
          }
        }
      `;

      const csvRequest = createMockSampleSoilDataInput();
      const processedFileResponse = {
        id: csvRequest.id,
        success: true,
      };

      beforeEach(() => {
        jest.spyOn(dataParserProvider, 'processCsv').mockResolvedValue(processedFileResponse);
      });

      test('should call create client survey when passed a valid input', async () => {
        const variables: MutationParseSoilSamplingCsvArgs = {
          input: csvRequest,
        };

        await client.mutate({ mutation, variables });

        expect(dataParserProvider.processCsv).toHaveBeenCalledWith(variables.input);
      });
      test('should return created client survey when passed a valid input', async () => {
        const variables: MutationParseSoilSamplingCsvArgs = {
          input: csvRequest,
        };

        const result = await client.mutate({ mutation, variables });

        expect(result.data).toEqual({
          parseSoilSamplingCsv: {
            __typename: 'CsvParserResult',
            errors: null,
            ...processedFileResponse,
          },
        });
      });
    });
  });
});

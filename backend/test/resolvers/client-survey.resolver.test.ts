import { gql } from 'apollo-server-core';

import { clientSurveyResolver } from '../../src/application/resolvers/client-survey.resolver';
import { clientSurveyProvider } from '../../src/application/providers';
import { typeDefs } from '../../src/application/schema/index';
import { MutationCreateClientSurveyArgs } from '../../src/application/schema/types/schema';

import { createMockClientSurvey } from '../helpers/client-survey.helper';
import { TestClient } from '../helpers/client.helper';
import { ObjectId } from 'mongodb';

let client: TestClient;

jest.mock('../../src/application/database', () => ({
  setupDb: (): any => ({ collection: (): any => jest.fn() }),
}));

const mockClientSurvey = createMockClientSurvey();

beforeAll(async (): Promise<void> => {
  client = new TestClient(typeDefs, clientSurveyResolver);
});

beforeEach(async (): Promise<void> => {
  jest.restoreAllMocks();
});

describe('clientSurveyResolver', (): void => {
  describe('Query', () => {
    describe('clientSurvey', () => {
      const query = gql`
        query getClientSurvey($clientSurveyId: ObjectID!) {
          clientSurvey(id: $clientSurveyId) {
            id
            name
          }
        }
      `;
      test('should get client survey', async () => {
        jest.spyOn(clientSurveyProvider, 'getClientSurvey').mockResolvedValue(mockClientSurvey);

        const variables = {
          clientSurveyId: new ObjectId(),
        };

        const result = await client.query({ query, variables });

        expect(result.data).toEqual({
          clientSurvey: {
            __typename: 'ClientSurvey',
            id: mockClientSurvey.id,
            name: mockClientSurvey.name,
          },
        });

        expect(clientSurveyProvider.getClientSurvey).toHaveBeenCalledTimes(1);
      });
    });
  });
  describe('Mutation', () => {
    describe('createClientSurvey', () => {
      const mutation = gql`
        mutation ($input: CreateClientSurveyInput!) {
          createClientSurvey(input: $input) {
            name
          }
        }
      `;

      const validClientSurvey = createMockClientSurvey({ name: 'test client' });

      beforeEach(() => {
        jest.spyOn(clientSurveyProvider, 'createClientSurvey').mockResolvedValue(validClientSurvey);
      });

      test('should call create client survey when passed a valid input', async () => {
        const variables: MutationCreateClientSurveyArgs = {
          input: { name: validClientSurvey.name },
        };

        await client.mutate({ mutation, variables });

        expect(clientSurveyProvider.createClientSurvey).toHaveBeenCalledWith(variables.input);
      });
      test('should return created client survey when passed a valid input', async () => {
        const variables: MutationCreateClientSurveyArgs = {
          input: { name: validClientSurvey.name },
        };

        const result = await client.mutate({ mutation, variables });

        expect(result.data).toEqual({
          createClientSurvey: {
            __typename: 'ClientSurvey',
            name: validClientSurvey.name,
          },
        });
      });
    });
  });
});

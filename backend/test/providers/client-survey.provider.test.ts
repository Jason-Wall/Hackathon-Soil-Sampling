import { Collection, ObjectId } from 'mongodb';

import { reveal, stub } from 'jest-auto-stub';
import { ClientSurveyProvider } from '../../src/application/providers/clientSurveys/client-survey.provider';
import { createMockClientSurveyDocument } from '../helpers/client-survey.helper';
import { ClientSurveyDocument, toClientSurveyObject } from '../../src/entities/client-survey';
import { ClientSurveyRepository } from '../../src/application/repositories/client-survey/client-survey.repository';

const stubClientSurveyCollection = stub<Collection<ClientSurveyDocument>>();

const clientSurveyRepository = new ClientSurveyRepository(stubClientSurveyCollection);
const clientSurveyProvider = new ClientSurveyProvider(clientSurveyRepository);

beforeEach(jest.clearAllMocks);

describe('clientSurveyProvider', (): void => {
  const mockClientSurveyDocument = createMockClientSurveyDocument();
  const mockClientSurvey = toClientSurveyObject(mockClientSurveyDocument);

  describe('getClientSurvey', (): void => {
    beforeEach(() => {
      reveal(stubClientSurveyCollection).findOne.mockImplementation(() => mockClientSurveyDocument);
    });
    test('should call find once', async () => {
      await clientSurveyProvider.getClientSurvey(new ObjectId());

      expect(stubClientSurveyCollection.findOne).toHaveBeenCalledTimes(1);
    });

    test('should get survey', async () => {
      const result = await clientSurveyProvider.getClientSurvey(new ObjectId());

      expect(result).toEqual(mockClientSurvey);
    });
  });
  describe('createClientSurvey', (): void => {
    const validClientSurvey = createMockClientSurveyDocument({ name: 'test client' });

    beforeEach(() => {
      reveal(stubClientSurveyCollection).findOneAndUpdate.mockImplementation(() => ({ value: validClientSurvey }));
    });
    test('should call findOneAndUpdate once', async () => {
      await clientSurveyProvider.createClientSurvey({ name: validClientSurvey.name });

      expect(stubClientSurveyCollection.findOneAndUpdate).toHaveBeenCalledTimes(1);
    });

    test('should return a survey when passed valid input', async () => {
      const result = await clientSurveyProvider.createClientSurvey({
        name: validClientSurvey.name,
      });

      expect(result).toEqual(toClientSurveyObject(validClientSurvey));
    });
  });
});

import { ObjectId } from 'bson';
import { ClientSurvey } from '../../src/application/schema/types/schema';
import { ClientSurveyDocument } from '../../src/entities/client-survey';

const createMockClientSurvey = (data?: Partial<ClientSurvey>): ClientSurvey => {
  return {
    __typename: 'ClientSurvey',
    id: new ObjectId().toHexString(),
    name: 'Jason Momoa',
    ...data,
  };
};

const createMockClientSurveyDocument = (data?: Partial<ClientSurveyDocument>): ClientSurveyDocument => {
  return {
    _id: new ObjectId(),
    name: 'Jason Momoa',
    ...data,
  };
};

export { createMockClientSurvey, createMockClientSurveyDocument };

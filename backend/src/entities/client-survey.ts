import { Document } from 'mongodb';
import { ClientSurvey } from '../application/providers/clientSurveys/client-survey.provider.types';

interface ClientSurveyDocument extends Document, Omit<ClientSurvey, 'id'> {}

const toClientSurveyObject = (topping: ClientSurveyDocument): ClientSurvey => {
  return {
    id: topping._id.toHexString(),
    name: topping.name,
  };
};

export { ClientSurveyDocument, toClientSurveyObject };

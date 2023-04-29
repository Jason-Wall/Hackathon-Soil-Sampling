import { ObjectId } from 'mongodb';
import { CreateClientSurveyInput, ClientSurvey } from './client-survey.provider.types';
import { ClientSurveyRepository } from '../../repositories/client-survey/client-survey.repository';

class ClientSurveyProvider {
  constructor(private repository: ClientSurveyRepository) {}

  public async getClientSurvey(clientSurveyId: ObjectId): Promise<ClientSurvey> {
    return this.repository.getClientSurvey(clientSurveyId);
  }

  public async createClientSurvey(input: CreateClientSurveyInput): Promise<ClientSurvey> {
    return this.repository.createClientSurvey(input);
  }
}

export { ClientSurveyProvider };

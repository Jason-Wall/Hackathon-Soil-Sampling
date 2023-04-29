import { Collection, ObjectId } from 'mongodb';
import { ClientSurveyDocument, toClientSurveyObject } from '../../../entities/client-survey';
import { ClientSurvey, CreateClientSurveyInput } from '../../providers/clientSurveys/client-survey.provider.types';

class ClientSurveyRepository {
  constructor(private collection: Collection<ClientSurveyDocument>) {}

  public async getClientSurvey(clientSurveyId: ObjectId): Promise<ClientSurvey> {
    const clientSurvey = await this.collection.findOne({ _id: new ObjectId(clientSurveyId) });

    if (!clientSurvey) {
      throw new Error(`Could not find the ${clientSurveyId.toHexString()} client survey`);
    }

    return toClientSurveyObject(clientSurvey);
  }

  public async createClientSurvey(input: CreateClientSurveyInput): Promise<ClientSurvey> {
    const data = await this.collection.findOneAndUpdate(
      { _id: new ObjectId() },
      { $set: { ...input, updatedAt: new Date().toISOString(), createdAt: new Date().toISOString() } },
      { upsert: true, returnDocument: 'after' }
    );

    if (!data.value) {
      throw new Error(`Could not create the ${input.name} client survey`);
    }
    const clientSurvey = data.value;

    return toClientSurveyObject(clientSurvey);
  }
}

export { ClientSurveyRepository };

import { ObjectId } from 'mongodb';

import { clientSurveyProvider } from '../providers';
import { CreateClientSurveyInput, ClientSurvey } from '../schema/types/schema';
import { Root } from '../schema/types/types';

const clientSurveyResolver = {
  Query: {
    clientSurvey: async (_: Root, args: { id: string }): Promise<ClientSurvey> => {
      return clientSurveyProvider.getClientSurvey(new ObjectId(args.id));
    },
  },

  Mutation: {
    createClientSurvey: async (_: Root, args: { input: CreateClientSurveyInput }): Promise<ClientSurvey> => {
      return clientSurveyProvider.createClientSurvey(args.input);
    },
  },
};

export { clientSurveyResolver };

import { setupDb } from '../database';
import { ClientSurveyRepository } from '../repositories/client-survey/client-survey.repository';
import { ClientSurveyProvider } from './clientSurveys/client-survey.provider';

const db = setupDb();

// repositories
const clientSurveyRepository = new ClientSurveyRepository(db.collection('clientSurveys'));

// providers
const clientSurveyProvider = new ClientSurveyProvider(clientSurveyRepository);

export { clientSurveyProvider };

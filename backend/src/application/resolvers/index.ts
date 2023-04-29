import { merge } from 'lodash';

import { clientSurveyResolver } from './client-survey.resolver';

const resolvers = merge(clientSurveyResolver);

export { resolvers };

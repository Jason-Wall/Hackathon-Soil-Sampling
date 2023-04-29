import { gql } from 'apollo-server-core';

import { typeDefs as clientSurveyTypeDefs } from './client-survey.schema';

const scalarSchema = gql`
  scalar ObjectID
  scalar Long
`;

const typeDefs = gql`
  ${scalarSchema}
  ${clientSurveyTypeDefs}
`;

export { typeDefs };

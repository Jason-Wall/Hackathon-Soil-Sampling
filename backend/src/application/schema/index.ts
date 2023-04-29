import { gql } from 'apollo-server-core';

import { typeDefs as dataParserTypeDefs } from './data-parser.schema';

const scalarSchema = gql`
  scalar ObjectID
  scalar Long
`;

const typeDefs = gql`
  ${scalarSchema}
  ${dataParserTypeDefs}
`;

export { typeDefs };

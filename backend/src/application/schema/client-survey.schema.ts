import { gql } from 'apollo-server';

const typeDefs = gql`
  type ClientSurvey {
    id: ObjectID!
    name: String!
  }

  type Query {
    clientSurvey(id: ObjectID!): ClientSurvey!
  }

  type Mutation {
    createClientSurvey(input: CreateClientSurveyInput!): ClientSurvey!
  }

  input CreateClientSurveyInput {
    name: String!
  }
`;

export { typeDefs };

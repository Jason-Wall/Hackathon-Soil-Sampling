import { gql } from 'apollo-server';

const typeDefs = gql`
  type CsvParserResult {
    id: ObjectID!
    success: Boolean!
    errors: [CsvParserErrors]
  }

  type CsvParserErrors {
    message: String!
  }

  type Mutation {
    parseSoilSamplingCsv(input: SendCsvInput!): CsvParserResult!
  }

  input SendCsvInput {
    id: ObjectID!
    name: String!
    """
    As base64
    """
    csvContent: String!
  }
`;

export { typeDefs };

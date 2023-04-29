import { dataParserProvider } from '../providers';
import { Root } from '../schema/types/types';
import { CsvParserResult, SendCsvInput } from '../schema/types/schema';

const dataParserResolver = {
  Mutation: {
    parseSoilSamplingCsv: async (_: Root, args: { input: SendCsvInput }): Promise<CsvParserResult> => {
      return dataParserProvider.createClientSurvey(args.input);
    },
  },
};

export { dataParserResolver };

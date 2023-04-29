import { parse } from 'csv-parse';

import { SoilSampleRepository } from '../../repositories/soil-sample/soil-sample.repository';
import { CreateSampleSoilDataInput, ParsingResult, SoilSample, SoilSamplesStorage } from './data-parser.provider.types';
import { ObjectId } from 'mongodb';

class DataParserProvider {
  constructor(private repository: SoilSampleRepository) {}

  public async createClientSurvey(input: CreateSampleSoilDataInput): Promise<ParsingResult> {
    const csvContent = atob(input.csvContent);

    const storage: SoilSamplesStorage = {
      name: input.name,
      samples: []
    };

    parse(csvContent, {
      delimiter: ',',
      columns: () => {
        return ['size', 'cumulativePercentage'];
      },
    }, (error, result: SoilSample[]) => {
      if (error) {
        console.error(error);
      }

      storage.samples = result;
    });

    try{
      this.repository.createSoilSample(new ObjectId(input.id), storage);
      return {
        id: input.id,
        success: true,
      }
    }
    catch(ex) {
      return {
        id: input.id,
        success: false,
        errors: [(ex as any).message]
      }
    }
  }
}

export { DataParserProvider };

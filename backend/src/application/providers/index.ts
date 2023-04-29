import { setupDb } from '../database';
import { SoilSampleRepository } from '../repositories/soil-sample/soil-sample.repository';
import { DataParserProvider } from './data-parser/data-parser.provider';

const db = setupDb();

// repositories
const soilSampleRepository = new SoilSampleRepository(db.collection('soilSamples'));

// providers
const dataParserProvider = new DataParserProvider(soilSampleRepository);

export { dataParserProvider };

import { Collection, ObjectId } from 'mongodb';

import { SoilSamplesStorage } from '../../../application/providers/data-parser/data-parser.provider.types';
import { SoilSampleDocument, toSoilSampleObject } from '../../../entities/soil-sample';

class SoilSampleRepository {
  constructor(private collection: Collection<SoilSampleDocument>) {}

  public async createSoilSample(id: ObjectId, input: SoilSamplesStorage): Promise<SoilSamplesStorage> {
    const data = await this.collection.findOneAndUpdate(
      { _id: id },
      { $set: { ...input, updatedAt: new Date().toISOString(), createdAt: new Date().toISOString() } },
      { upsert: true, returnDocument: 'after' }
    );

    if (!data.value) {
      throw new Error(`Could not create the ${id.toHexString()} soil sample`);
    }
    const soilSample = data.value;

    return toSoilSampleObject(soilSample);
  }
}

export { SoilSampleRepository };

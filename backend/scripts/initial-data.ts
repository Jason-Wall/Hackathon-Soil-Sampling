import { ObjectId, ObjectID } from 'bson';
import { createHash } from 'crypto';

export interface SeedClientSurvey {
  _id: ObjectID;
  name: string;
  updatedAt: string;
  createdAt: string;
}

const deterministicId = (data: string): ObjectId => {
  const hash = createHash('sha1').update(data).digest('hex').slice(0, 24);

  return new ObjectId(hash);
};

const ID = {
  MargotRobbie: deterministicId('Margot Robbie'),
  JohnMalkovich: deterministicId('John Malkovich'),
  SummerLynGlau: deterministicId('Summer Lyn Glau'),
};

export const clientSurveys: SeedClientSurvey[] = [
  {
    _id: ID.MargotRobbie,
    name: 'Margot Robbie',
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    _id: ID.JohnMalkovich,
    name: 'John Malkovich',
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    _id: ID.SummerLynGlau,
    name: 'Summer Lyn Glau',
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
];

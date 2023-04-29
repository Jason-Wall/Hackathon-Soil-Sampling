export interface ParsingResult {
  id: string;
  success: boolean;
  errors?: CsvParserErrors[];
}

export interface CsvParserErrors {
  message: string;
}

export interface CreateSampleSoilDataInput {
  id: string;
  name: string;
  csvContent: string;
}

export interface SoilSamplesStorage {
  name: string;
  samples: SoilSample[];
}

export interface SoilSample {
  size: number;
  cumulativePercentage: number;
}

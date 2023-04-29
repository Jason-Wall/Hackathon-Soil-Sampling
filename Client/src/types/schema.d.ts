export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: any;
  ObjectID: any;
};

export type CsvParserErrors = {
  __typename?: "CsvParserErrors";
  message: Scalars["String"];
};

export type CsvParserResult = {
  __typename?: "CsvParserResult";
  errors?: Maybe<Array<Maybe<CsvParserErrors>>>;
  id: Scalars["ObjectID"];
  success: Scalars["Boolean"];
};

export type Mutation = {
  __typename?: "Mutation";
  parseSoilSamplingCsv: CsvParserResult;
};

export type MutationParseSoilSamplingCsvArgs = {
  input: SendCsvInput;
};

export type Query = {
  __typename?: "Query";
  test?: Maybe<TestResponse>;
};

export type SendCsvInput = {
  /** As base64 */
  csvContent: Scalars["String"];
  id: Scalars["ObjectID"];
  name: Scalars["String"];
};

export type TestResponse = {
  __typename?: "TestResponse";
  test: Scalars["String"];
};

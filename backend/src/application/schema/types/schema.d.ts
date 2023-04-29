export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type ClientSurvey = {
  __typename?: 'ClientSurvey';
  id: Scalars['ObjectID'];
  name: Scalars['String'];
};

export type CreateClientSurveyInput = {
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createClientSurvey: ClientSurvey;
};

export type MutationCreateClientSurveyArgs = {
  input: CreateClientSurveyInput;
};

export type Query = {
  __typename?: 'Query';
  clientSurvey: ClientSurvey;
};

export type QueryClientSurveyArgs = {
  id: Scalars['ObjectID'];
};

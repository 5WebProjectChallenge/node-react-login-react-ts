import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getAuthUser?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signUp?: Maybe<AuthResponse>;
  login: UserResponse;
  logout: Scalars['Boolean'];
};


export type MutationSignUpArgs = {
  details: UsernamePasswordTypes;
};


export type MutationLoginArgs = {
  details: UsernamePasswordTypes;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UsernamePasswordTypes = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  user?: Maybe<User>;
  errors?: Maybe<FieldError>;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  ) }
);

export type SignUpMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp?: Maybe<(
    { __typename?: 'AuthResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  )> }
);

export type GetAuthUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthUserQuery = (
  { __typename?: 'Query' }
  & { getAuthUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);


export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(details: {username: $username, password: $password}) {
    user {
      id
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const SignUpDocument = gql`
    mutation SignUp($username: String!, $password: String!) {
  signUp(details: {username: $username, password: $password}) {
    user {
      username
    }
    errors {
      field
      message
    }
  }
}
    `;

export function useSignUpMutation() {
  return Urql.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument);
};
export const GetAuthUserDocument = gql`
    query GetAuthUser {
  getAuthUser {
    id
    username
  }
}
    `;

export function useGetAuthUserQuery(options: Omit<Urql.UseQueryArgs<GetAuthUserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAuthUserQuery>({ query: GetAuthUserDocument, ...options });
};
import Layout from '../Layout'
import Code from './Code'
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// type Props = {
//   query: string
//   children?: JSX.Element|JSX.Element[];

// }

interface IPeople {
  name: string;
  height: number;
  mass: number;
  gender: string;
  homeworld: string;
}
interface IQueryResult {
    people: IPeople;
}

const GET_PEOPLE = gql`
    {
     people {
        name
        height
        mass
        gender
        homeworld
       }
    }
`;
const QueryPage = () => {

  return (
  <Query<IQueryResult> query={GET_PEOPLE}>
      {({ data, loading, error }) => {
        if (!data || !data.people) {
          return null;
        }
        if (error) {
          return <div className="viewer">{error.toString()}</div>;
        }
        if (loading) {
          return <div className="viewer">Loading ...</div>;
        }
        return (
          <div>
            <div className="viewer">{data.people.name}</div>
            <div className="viewer">{data.people.mass}</div>
            <div className="viewer">{data.people.gender}</div>
            <div className="viewer">{data.people.height}</div>
            <div className="viewer">{data.people.homeworld}</div>
          </div>
        );
      }}
    </Query>
  );
  // <div className="result-container flex w-50-l flex-column justify-start items-center">{children}</div>
  // <div className="pa4-ns flex flex-column w-50-l justify-start items-center">
  //   <Code query={query} />
  // </div>

}
  <style jsx scoped>{`
    .result-container {
      margin-bottom: 20px;
    }
    @media only screen and (min-width: 500px){
      .result-container {
        padding: 32px;
      }
    }

  `}</style>

export default QueryPage;

/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import { Query } from 'react-apollo'

const QueryComponent = ({ children, query, ...rest }) => {
  return (
    <Query query={query} {...rest}>
      {({ loading, error, data }) => {
        if (loading) return null
        if (error) return <p>Error :(</p>
        return children({data})
      }}
    </Query>
  )
};

export default QueryComponent;

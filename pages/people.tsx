import gql from 'graphql-tag'
import Link from 'next/link'
import { Fragment } from 'react'
import QueryPage from '../client/src/components/QueryPage'
import List from '../client/src/components/EntityList/EntityList'
import Item from '../client/src/components/EntityList/EntityItem'
// import SearchBox from '../client/src/components/SearchBox'
import Query from '../client/src/components/Query'
import withData from '../client/src/lib/withData'

const query = `query allPeople {
  people {
    id
    name
  }
}
`
const peopleQuery = gql(query)

export default withData(() => (
  <QueryPage query={query}>
    <Query query={peopleQuery}>
      {({ data }) => {
        return (
          <Fragment>
            {/* <SearchBox /> */}
            <List>
              {data.people.map(person => (
                <Link prefetch href={`/person?id=${person.id}`} key={person.id}>
                  <a >
                    <Item content={person.name} />
                  </a>
                </Link>
              ))}
            </List>
          </Fragment>
        )
      }}
    </Query>
  </QueryPage>
))

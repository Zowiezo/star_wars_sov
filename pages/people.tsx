import gql from 'graphql-tag'
import Link from 'next/link'
import { Fragment } from 'react'
import QueryPage from '../pages/client/src/components/QueryPage'
import List from '../pages/client/src/components/EntityList/EntityList'
import Item from '../pages/client/src/components/EntityList/EntityItem'
import SearchBox from '../pages/client/src/components/Search'
import Query from '../pages/client/src/components/Query'
import withData from '../pages/client/src/lib/withData'

const query = `query allPeople {
  people {
    id
    name
    height
    mass
    gender
    homeworld
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
            <SearchBox />
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

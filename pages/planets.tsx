import gql from 'graphql-tag'
import Link from 'next/link'
import { Fragment } from 'react'
import QueryPage from '../client/src/components/QueryPage'
import List from '../client/src/components/EntityList/EntityList'
import Item from '../client/src/components/EntityList/EntityItem'
import Query from '../client/src/components/Query'
import SearchBox from '../client/src/components/SearchBox'
import withData from '../client/src/lib/withData'

const query = `query allPlanets {
  planets {
    id
    name
  }
}
`
const planetsQuery = gql(query)

export default withData(() => (
  <QueryPage query={query}>
    <Query query={planetsQuery}>
      {({ data }) => {
        return (
          <Fragment>
            {/* <SearchBox /> */}
            <List>
              {data.planets.map(planet => (
                <Link prefetch href={`/planet?id=${planet.id}`} key={planet.id}>
                  <a >
                    <Item content={planet.name} />
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

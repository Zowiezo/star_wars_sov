import gql from 'graphql-tag'

import withData from '../pages/client/src/lib/withData'
import QueryPage from '../pages/client/src/components/QueryPage'
import DetailPage from '../pages/client/src/components/DetailPage/DetailPage'
import Query from '../pages/client/src/components/Query'

const query = `query person($id: ID!) {
  person(id: $id) {
    id
    gender
    height
    mass
    name
    homeworld {
      id
      name
    }
  }
}
`

const personDetailQuery = gql(query)

const PersonDetail = ({ person }) => (
  <DetailPage
    entity={person}
    fields={['name', 'height', 'mass', 'gender', 'homeworld']}
    relations={[
      { name: 'homeworld', title: 'name', url: '/planet' }
    ]}
    title="name"
  />
)

export default withData(({ url }) => {
  return (
    <QueryPage query={query}>
      <Query query={personDetailQuery} variables={{ id: url.query.id }}>
        {({ data }) => {
          return <PersonDetail person={data.person} />
        }}
      </Query>
    </QueryPage>
  )
})

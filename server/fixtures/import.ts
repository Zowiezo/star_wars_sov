import { omit, pick } from 'ramda'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Person } from '../src/entity'
const fixtures = require('.')
let {
  people,
} = fixtures

const relations = [
  'characters',
  'homeworld',
]

function loaddata(entity, data, omits, connection) {
  return connection
    .createQueryBuilder()
    .insert()
    .into(entity)
    .values(data.map(d => ({ ...omit(omits, d.fields), id: d.pk })))
    .execute()
}
function loadRelation(entity, attribute, data, connection) {
  return Promise.all(
    data.map(d => {
      if (d.fields[attribute] instanceof Array) {
        return connection
          .createQueryBuilder()
          .relation(entity, attribute)
          .of(d.pk)
          .add(d.fields[attribute])
          .catch(console.error)
      } else {
        return connection
          .createQueryBuilder()
          .relation(entity, attribute)
          .of(d.pk)
          .set(d.fields[attribute])
          .catch(console.error)
      }
    }),
  )
}
createConnection()
  .then(async connection => {
    await Promise.all([
      loaddata(Person, people, relations, connection),
    ])
    await Promise.all([

      loadRelation(Person, 'homeworld', people, connection),
    ])
  })
  .catch(console.error)

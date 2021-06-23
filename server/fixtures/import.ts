import { omit } from 'ramda'
import 'reflect-metadata'
import { Connection, createConnection } from 'typeorm'
import { Person } from '../src/entity'
const fixtures = require('.')
let {
  people,
} = fixtures

const relations = [
  'characters',
  'homeworld',
]

function loaddata(entity: typeof Person, data: any[], omits: readonly string[], connection: Connection) {
  return connection
    .createQueryBuilder()
    .insert()
    .into(entity)
    .values(data.map((d: { fields: any; pk: any }) => ({ ...omit(omits, d.fields), id: d.pk })))
    .execute()
}
function loadRelation(entity: typeof Person, attribute: string, data: { map: (arg0: (d: any) => any) => readonly [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown] }, connection: Connection) {
  return Promise.all(
    data.map((d: { fields: { [x: string]: any }; pk: any }) => {
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

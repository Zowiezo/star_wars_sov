// import * as Dataloader from 'dataloader'
// import { groupBy } from 'ramda'
// import { getRepository } from 'typeorm'
// import { Person } from './entity'
// import { DefaultDict } from './utils'

// // example: many people to one homeworld (planet) would be manyToOneLoader(Planet)
// const manyToOneLoader = entity => new Dataloader(ids => getRepository(entity).findByIds(ids))

// // TODO: could compose loaders and use a base entity loader without the where and groupby filters
// // inside specific reverse foreign key loaders but it would potentially take a lot of memory...

// // example one planet to many residents would be oneToMany(Person, 'person', 'homeworldId')
// const oneToManyLoader = (entity, tableName, relationIdName) =>
//   new Dataloader(async ids => {
//     const entities = await getRepository(entity)
//       .createQueryBuilder(tableName)
//       .where(`${tableName}.${relationIdName} IN (:ids)`, { ids })
//       .getMany()
//     const byIds = groupBy(row => row[relationIdName], entities)
//     return ids.map(id => byIds[id.toString()])
//   })

// const manyToManyLoader = (loadingEntity, tableName, relationName) =>
//   new Dataloader(async ids => {
//     const entities = await getRepository(loadingEntity)
//       .createQueryBuilder(tableName)
//       .select(tableName)
//       .addSelect(`${relationName}.id`)
//       .innerJoin(`${tableName}.${relationName}`, relationName)
//       .getMany()

//     const byIds = new DefaultDict()
//     for (const entity of entities) {
//       for (const related of await entity[relationName]) {
//         byIds.add(related.id, entity)
//       }
//     }
//     return ids.map(id => byIds.get(id))
//   })

// export const personLoaderByPlanetIds = () => oneToManyLoader(Person, 'person', 'homeworldId')

// export default () => ({
//   personLoaderByPlanetIds: personLoaderByPlanetIds(),
// })

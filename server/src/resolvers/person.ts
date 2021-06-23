import { getRepository } from 'typeorm'
import { Person } from '../entity'

export const queries = {
  person: async (_: any, { id }: any) => getRepository(Person).findByIds(id),
  people: async (_: any, { limit }: any) => {
    const opts: any = {}
    if (limit) {
      opts.take = limit
    }
    return getRepository(Person).find(opts)
  },
}

export const fields = {
  homeworld: (person: { homeworldId: any }, _params: any, { loaders }: any) => {
    if (!person.homeworldId) {
      return null
    }
    return loaders.planetLoader.load(person.homeworldId)
  },
  specie: (person: { specieId: any }, _params: any, { loaders }: any) => (person.specieId ? loaders.specieLoader.load(person.specieId) : null),
  films: (person: { id: any }, _params: any, { loaders }: any) => loaders.filmLoaderByCharacterIds.load(person.id),
  starships: (person: { id: any }, _params: any, { loaders }: any) => loaders.starshipLoaderByPersonIds.load(person.id),
  vehicles: (person: { id: any }, _params: any, { loaders }: any) => loaders.vehicleLoaderByPersonIds.load(person.id),
}


export const subscriptions = {
}
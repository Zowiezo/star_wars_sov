import {zipObj} from 'ramda'
import * as Person from './person'


const entities = [Person]
const names = [ 'Person']
const queries = entities.map(e => e.queries)
const subscriptions = entities.map(e => e.subscriptions)
const fields = entities.map(e => e.fields)

export default {
  Query: Object.assign({}, ...queries),
  Subscription: Object.assign({}, ...subscriptions),
  ...zipObj(names, fields)
}

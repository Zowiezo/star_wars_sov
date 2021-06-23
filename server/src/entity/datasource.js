import { RESTDataSource } from 'apollo-datasource-rest';

export class MvrpAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://mvrp.herokuapp.com/api/';
  }

  async getAllPeople() {
    return this.get('people');
  }

  async getAPeople(name) {
    const result = await this.get('people', {
      name
    });

    return result[0];
  }
};

export class Configuration {
  constructor(config) {
    Object.assign(this, {
      api: 'https://api.openai.com/v1'
    }, config);
  }
}

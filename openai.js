
export class OpenAI {
  constructor(configuration) {
    this.configuration = configuration;
  }
  async createCompletion(request) {
    const { api, apiKey } = this.configuration;
    const res = await fetch(`${api}/v1/completions`, {
      body: JSON.stringify(request),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
    });
    return res.json();
  }
}

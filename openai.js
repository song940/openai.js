
export class OpenAI {
  constructor(configuration) {
    this.configuration = configuration;
  }
  async post(path, data) {
    const { api, apiKey } = this.configuration;
    const res = await fetch(api + path, {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
    });
    return res.json();
  }
  createCompletion(request) {
    return this.post(`/v1/completions`, request);
  }

  createChatCompletion(request) {
    return this.post(`/v1/chat/completions`, request);
  };
}

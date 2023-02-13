import { OpenAI, Configuration } from '../index.js';

const configuration = new Configuration({
  apiKey: `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`,
});

const openai = new OpenAI(configuration);

(async () => {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "能写一个肯德基疯狂星期四的文案吗",
    temperature: 0,
    max_tokens: 2048
  });
  console.log(completion.choices[0].text);
})();
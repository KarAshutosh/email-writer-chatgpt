const { Configuration, OpenAIApi } = require("openai");
const dotenv = require('dotenv')

const api_key = "api-key-here";
process.env["OPENAI_API_KEY"] = api_key;

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function generateResponse(prompt) {
    
    const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: prompt,
    });
    console.log(completion.data.choices[0].text);
    return completion.data.choices[0].text;
}

const result = generateResponse("Write an email to your professor to give you a project");

console.log(result);



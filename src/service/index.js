import OpenAI from 'openai';
import { config } from 'dotenv';
config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
  baseURL: 'https://bothub.chat/api/v2/openai/v1'
});

async function microServiceApiOpena(sendMsg) {
    const requestSend = sendMsg //funcionando okey
    const options = {
        messages: [
            { role: 'user', 
            content: requestSend
        
        }],

        model: 'gpt-3.5-turbo',
      }
    const chatCompletion = await openai.chat.completions.create(options);
 
    return chatCompletion
  }
  
  export default microServiceApiOpena
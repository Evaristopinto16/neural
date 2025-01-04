import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3YjEyMWFlLWUwZDYtNDliMi1iNjlmLTBkNzE3ODkzYjgzOSIsImlzRGV2ZWxvcGVyIjp0cnVlLCJpYXQiOjE3Mjc2OTA0MTgsImV4cCI6MjA0MzI2NjQxOH0.0_rVXKNuSCBP4MO6hBnTXAE0kE1h52xpwDSGPaR4vGM',
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
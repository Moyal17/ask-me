const express = require('express');
const axios = require('axios');

const router = express.Router();

const getAnswerChunks = async (body) => {
  // call the api provided and get answers
  // list the answers with confidence above (and including) 70%
  // *The chunks are in HTML format and should be rendered correctly*
  const func = 'getAnswerChunks';
  try {
    const response = await axios.post('https://inference-runner.hw.ask-ai.co/ask', {question: 'How do I remove a teammate?'}, {
      headers: {
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PATCH, PUT',
        'X-API-Key': 'e4f24b15-f271-4abd-8c8f-3ec106941bfa'
      }
    })
    console.log('inference-runner response: ', response);
    if (response && response.data && response.data && response.data.chunks.length > 0) {
      const chunks = response.data.chunks;
      return chunks.filter((obj) => obj.confidence > 70);
    }
    return [];
  } catch (e) {
    console.error(`${func} || ${JSON.stringify(e.message)}`);
  }
}

const getChunkHolderToken = async (body) => {
  const func = 'getChunkHolderToken';
  try {
    const response = await axios.post('https://chunk-holder.hw.ask-ai.co/auth/generate-token', {}, {
      headers: {
        'accept': 'application/json',
        'X-API-Key': '43ecda4c-7ee1-4acb-a50f-7f81e4c90719'
      }
    })
    console.log('inference-runner response: ', response);
    if (response && response.data && response.data.token) return response.data.token;
    return null;
  } catch (e) {
    console.error(`${func} || ${JSON.stringify(e.message)}`);
  }
}

const getChunksData = async (chunkId, token) => new Promise((resolve) => {
  axios.get(`https://chunk-holder.hw.ask-ai.co/chunks/${chunkId}`, {
    headers: {
      'accept': 'application/json',
      'Authorization': token
    }
  }).then((response) => {
    if (response && response.data && response.data) resolve(response.data);
  }).catch((err) => {
    console.log(err)
    resolve(null)
  })
})

const askQuestion = async (req, res) => {
  const func = 'askQuestion';
  try {
    // validate the question on 'req.body.question'
    const relevantAnswerChunks = await getAnswerChunks()
    console.log('relevantAnswerChunks: ', relevantAnswerChunks); // relevantAnswerChunks => [{chunkId , confidence)]

    // *The chunks are in HTML format and should be rendered correctly*
    const token = await getChunkHolderToken()

    const chunkPromise = relevantAnswerChunks.map((chunk) => getChunksData(chunk.chunkId, token))

    Promise.all(chunkPromise).then((data) => {
      console.log(data)
      console.log(`${func} || chunkPromise all has received`);
    }).catch((e) => {
      console.log(`${func} || chunkPromise error`, e);
    });
    // res.status(200).json(answers);
  } catch (e) {
    console.error(`${func} || ${JSON.stringify(e.message)}`);
    // res.status(419).json(e);
  }
};

console.log('Ask a Question!')
// askQuestion();
router.get('/askQuestion', askQuestion);

module.exports = router;

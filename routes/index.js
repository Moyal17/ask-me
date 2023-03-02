const express = require('express');

const router = express.Router();

const askQuestion = async (req, res) => {
  const func = 'askQuestion';
  let articles;
  try {
    // validate the question
    // call the api provided and get answers
    // list the answers with confidence above (and including) 70%
    // *The chunks are in HTML format and should be rendered correctly*
    res.status(200).json(answers);
  } catch (e) {
    console.error(`${func} || ${JSON.stringify(e.message)}`);
    res.status(419).json(e);
  }
};

console.log('Ask a Question!')

router.get('/askQuestion', askQuestion);

module.exports = router;

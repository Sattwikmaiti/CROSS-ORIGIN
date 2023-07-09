import express from 'express';
import { runWithEmbeddings } from './routes/gpt.js';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors())
app.post('/api/question', async (req, res) => {
  try {
    const { question } = req.body;

    // Update the question variable with the user-provided question
    const updatedQuestion = ` ${question}`;

    // Call the runWithEmbeddings function with the updated question
    const response = await runWithEmbeddings(updatedQuestion);

    res.json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

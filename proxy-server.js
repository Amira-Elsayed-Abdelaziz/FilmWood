import'express';
import('node-fetch';
import('cors');

const app = express();
app.use(cors()); // allow all origins

app.get('/movies/:id', async (req, res) => {
  try {
    const response = await fetch(`https://freetestapi.com/api/v1/movies/${req.params.id}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(5000, () => console.log('Proxy server running on http://localhost:5000'));
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors());

interface User {
  id: number;
  html_url: string;
  login: string;
  total_count: number;
}

app.get('/users', async (req, res) => {
  try {
    const data = await fetchData();
    res.send(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

async function fetchData(): Promise<User[]> {
  const response = await fetch('https://api.github.com/search/users?q=nabeegh');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  const users = data.items as User[];
  const userData: User[] = [];

  for (const user of users) {
    const { id, html_url, login, total_count } = user;
    userData.push({ id, html_url, login, total_count });
  }

  return userData
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/users`);
});

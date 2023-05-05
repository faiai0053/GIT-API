// interface User{
//   id: string,
//   html_url: string,
//   login: string,
// }


// async function fetchData(): Promise<User[]> {
  
  
//   const response = await fetch('https://api.github.com/search/users?q=nabeegh');
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();
//   return data as User[];
// }
// console.log("heloo")
// fetchData().then();
// import express from 'express';
// import fetch from 'node-fetch';
// interface User{
//   id: string,
//   html_url: string,
//   login: string,
// }

// const app = express();
// const port = 3000;

// async function fetchData(): Promise<User[]> {
//   const response = await fetch('https://api.github.com/search/users?q=nabeegh');
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();
//   return data as User[];
// }

// app.get('/users', async (req, res) => {
//   try {
//     const users = await fetchData();
//     res.send(users);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
// import express from 'express';

// const app = express();
// const port = 4000;

// app.get('/users', async (req, res) => {
//   try {
//     const fetch = await import('node-fetch');
//     const response = await fetch.default('https://api.github.com/search/users?q=nabeegh');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     res.send(data);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


//import * as express from 'express';





// import express from 'express';
// const app = express();
// const port = 11000;
// interface User{
//   id: string,
//   html_url: string,
//   login: string,
//   total_count:number
// }

// app.get('/users', async (req, res) => {
//   try {
//     const fetch = await import('node-fetch');
//     const response = await fetch.default('https://api.github.com/search/users?q=nabeegh');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });










// import express from 'express';
// import cors from 'cors';

// const app = express();
// const port = 12000;

// interface User {
//   id: string,
//   html_url: string,
//   login: string,
//   total_count: number
// }

// app.use(cors());

// app.get('/users', async (req, res) => {
//   try {
//     const fetch = await require('node-fetch');
//     const response = await fetch.default('https://api.github.com/search/users?q=nabeegh');
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });







// import express from 'express';
// import cors from 'cors';

// const app = express();
// const port = 3000;

// app.use(cors());

// interface User {
//   id: number;
//   html_url: string;
//   login: string;
//   total_count: number;
// }

// app.get('/users', async (req, res) => {
//   try {
//     // const response = await fetch('https://api.github.com/search/users?q=nabeegh');
//     // if (!response.ok) {
//     //   throw new Error(`HTTP error! status: ${response.status}`);
//     // }
//     // const data = await response.json();
//     // res.json(data);
    
//     const data = await fetchData()
//     res.send(data)
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });
// async function fetchData(): Promise<User[]> {
//   const response = await fetch('https://api.github.com/search/users?q=nabeegh');
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();
//   return data as User[];
// }

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/users`);
// });
















































// import express from 'express';
// import cors from 'cors';
// import fetch from 'node-fetch';

// const app = express();
// const port = 13000;

// app.use(cors());

// interface User {
//   id: number;
//   html_url: string;
//   login: string;
//   total_count: number;
// }

// app.get('/users', async (req, res) => {
//   try {
//     const data = await fetchData();
//     const users = data.items as User[];
//     const userData = [];

//     for (const user of users) {
//       const { id, html_url, login, total_count } = user;
//       userData.push({ id, html_url, login, total_count });
//     }

//     res.send(userData);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });

// async function fetchData(): Promise<any> {
//   const response = await fetch('https://api.github.com/search/users?q=nabeegh');
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();
//   return data;
// }

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/users`);
// });
































// import express from 'express';
// import cors from 'cors';

// const app = express();
// const port = 13000;

// app.use(cors());

// interface User {
//   id: number;
//   html_url: string;
//   login: string;
//   total_count: number;
// }

// app.get('/users', async (req, res) => {
//   try {
//     const data = await fetchData();
//     const users = data.items as User[];
//     const userData = [];

//     for (const user of users) {
//       const { id, html_url, login, total_count } = user;
//       userData.push({ id, html_url, login, total_count });
//     }
//     console.log("hello")

//     res.send(userData);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });

// async function fetchData(): Promise<any> {
//   const fetch = await import('node-fetch');
//   const response = await fetch.default('https://api.github.com/search/users?q=nabeegh');
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();
//   return data;
// }

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/users`);
// });






















import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';



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
    const users = data.items as User[];
    const userData = [];

    for (const user of users) {
      const { id, html_url, login, total_count } = user;
      userData.push({ id, html_url, login, total_count });
    }
   
    res.send(userData);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

async function fetchData(): Promise<any> {
  const { default: fetch } = await import('node-fetch');
  const response = await fetch('https://api.github.com/search/users?q=nabeegh');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/users`);
});
console.log("hello")


// shortcut req
const express = require('express');
const cors = require('cors');
const { query } = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Assalamu Alaikum, kemon achen sobai');
});

const users = [
  { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01999999999' },
  { id: 2, name: 'Sabur', email: 'sabur@gmail.com', phone: '01999999999' },
  {
    id: 3,
    name: 'salam',
    email: 'salam@gmail.com',
    phone: '01999999999',
  },
  { id: 4, name: 'Alamgir', email: 'alamgir@gmail.com', phone: '01999999999' },
  { id: 5, name: 'Monir', email: 'monir@gmail.com', phone: '01999999999' },
  { id: 6, name: 'Kalam', email: 'kalam@gmail.com', phone: '01999999999' },
  { id: 7, name: 'Aslam', email: 'aslam@gmail.com', phone: '01999999999' },
];

app.get('/users', (req, res) => {
  // filter by search query parameter
  if (req.query.name) {
    const search = req.query.name.toLocaleLowerCase();
    const matched = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get('/fruits', (req, res) => {
  res.send(['mango', 'apple', 'oranges']);
});

app.get('/fruits/mango/fazli', (req, res) => {
  res.send('sour sour fazli flavor');
});

app.get('/users/:id', (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post('/user', (req, res) => {
  console.log('request', req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log('Listening to port', port);
});

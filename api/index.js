const admin = require('firebase-admin');
var serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://iic3585-g4-e4-default-rtdb.firebaseio.com/',
});

const express = require('express');
const { request } = require('express');
const app = express();
const port = 9000;
const cors = require('cors');
const tokens = [
  'ebMKJcJfGt3zFLhvTbuf6x:APA91bHyUO0MojUirXeUYoWOddChOnTJwfPEw2rYGGmjBXNPdWA-UU89QXbR0WoekzgN_hP2HZYTSVEEPfSZkNyDVfINi96fwLyGQIx8GuwyxLq-Sjg1Xe0EWdQtEoWAIZvF3BDspYmE',
];

app.use(express.json());
app.use(cors());

app.post('/token', (req, res) => {
  res.send('Hello World!');
});

app.post('/message', (req, res) => {
  console.log(req);
  const {
    body: { message, title },
  } = req;
  const outputMessage = { notification: { title, body: message } };
  for (let i = 0; i < tokens.length; i++) {
    admin
      .messaging()
      .sendToDevice(tokens[i], outputMessage)
      .then((response) => {
        res.status(200).send('Notification sent successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  res.send({ msg: 'Notifications Sent' }).json();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

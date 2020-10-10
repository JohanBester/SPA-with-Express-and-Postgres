const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const posts = require('./routers/posts.js');

const appPort = process.env.PORT || 8675;
const app = express();

app
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use('/posts', posts)

app.listen(appPort, () => console.log(`Listening on port ${appPort}`));

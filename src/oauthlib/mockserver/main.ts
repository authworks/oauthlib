import express from 'express';
import bodyParser from 'body-parser';
import { connect } from '../adaptors/express';
import { OAuth2Server } from '../oauth2/server';

const app = express();
app.use(bodyParser.json());
const server = new OAuth2Server();

app.get('/authorize', connect(server.authorize.bind(server)));
app.post('/token', connect(server.token.bind(server)));
app.get('/cb', (req, res) => {
  res.send(req.url);
});

app.listen(8080);

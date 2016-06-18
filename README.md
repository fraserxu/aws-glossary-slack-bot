# aws-glossary-slack-bot
Send a message to your slack channel daily of one service definition from AWS

<img width="893" alt="slack bot" src="https://cloud.githubusercontent.com/assets/1183541/16170686/472e5a5a-359f-11e6-98b4-6a7e79cc0ee8.png">

### Requirement

You will need to get the authentication token [from slack](https://api.slack.com/methods/chat.postMessage) first, and then start your cron server with `SLACK_TOKEN=YOU_SLACK_TOKEN node index.js`. If you use a server like Heroku, pass the `env` through Heroku `env` settings page.

### Development

To generate `services.json`, run `node services.js`

```sh
$ npm install
$ npm start
```

### To start the cron job

```sh
$ npm start
```

### License

MIT

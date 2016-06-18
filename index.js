const CronJob = require('cron').CronJob
const got = require('got')
const services = require('./services.json')

const text = genMessage(services[genRandomNumber()])
const username = 'AWS service name in Plain English Bot'
const channel = 'aws-learning-group'
const icon_url = 'https://cloud.githubusercontent.com/assets/1183541/16170553/08442e28-359a-11e6-9afd-719ce44fe4d1.png'
const token = process.env.SLACK_TOKEN

const job = new CronJob({
  cronTime: '00 00 22 * * *',
  onTick: function () {
    // Runs every day at 19:55:00 PM.
    sendMsg()
  },
  start: false,
  timeZone: 'Australia/Melbourne'
})

job.start()

function genRandomNumber () {
  // -1 so that it can show first result
  return Math.floor(Math.random() * services.length + 1) - 1
}

function genMessage(obj) {
  return `*Service Name: * ${obj.name} \n *Category: * ${obj.category} \n *Use This To: * ${obj.purpose} \n *Analogy: * ${obj.analogy} \n`
}

const url = `https://slack.com/api/chat.postMessage?token=${token}&username=${username}&channel=${channel}&text=${text}&pretty=1&icon_url=${icon_url}`
function sendMsg () {
  got(url)
    .then(function (res) {
      console.log('Message sent.')
    })
    .catch(function (err) {
      console.log('err', err)
    })
}

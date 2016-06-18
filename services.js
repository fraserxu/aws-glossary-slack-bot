const fs = require('fs')
const ws = fs.createWriteStream('services.json')

const services = []

const appServicesString = `| EC2 (Elastic Compute Cloud) | Host full server software | A virtual machine used as a server that can be scaled vertically or horizontally. |
| S3 (Simple Storage Service) | Host files without running your own file server | This is like most other personal online file storage service, except developers often use this as the website file storage service (e.g. hosting images and videos). |
| VPC (Virtual Private Cloud) | Provision a logical (as opposed to physical) private network | A virtual private network and allows you to allocate and link your AWS resources within this private network. This also has the benefit of shielding resources from the public internet for additional protection. |
| IAM (Identity and Access Management) | Access control. Set up additional Users, AWS Keys, and Policies for resource access. | Additional logins that you assign to your web developers or system administrators except with more fine grained control. |
| Lambda | Run self contained snippets of your own code without managing servers (no new languages, tools, or frameworks needed). Commonly used to run code to setup AWS or in response to AWS resources such as S3 or DynamoDB. | Hosting your own code in a server. |`

appServicesString
  .split('\n')
  .forEach(function (serviceString) {
    const values = serviceString.split('|')
    services.push({
      name: values[1].trim(),
      purpose: values[2].trim(),
      analogy: values[3].trim(),
      category: 'Run an App Services'
    })
  })

const webDeveloperServicesString = `| API Gateway | Host and scale API endpoints for your website or application | API server hosted by AWS. |
| RDS (Relational Database Service) | Host and scale SQL databases. Also supports automatic backup. | SQL databases hosted by AWS. Similar to Mysql, Postgres, and Oracle database. |
| Route53 | Create a highly available and scalable Domain Name System (DNS) for your web apps. Route53 also supports Private DNS feature for your Virtual Private Clouds (VPCs), so you can use custom domain names for your internal AWS resources without exposing DNS data to the public Internet. | DNS service. |
| SES (Simple Email Service) | Send emails with high email deliverability without managing your own email servers. | Mail Transfer Agent software hosted AWS. Similar to Sendmail or Postfix. |
| Cloudfront | Distribute content to end users with low latency and high data transfer speeds at CDN servers across the world | Global CDN servers |
| CloudSearch | Host and scale a search index for your website or application. | Fulltext search hosted by AWS. Similar to Sphinx. |
| DynamoDB | Host and scale NoSQL databases. Store/Query structured data for consistent, single-digit millisecond latency at any scale. DynamoDB supports both document and key-value store models. | NoSQL databases hosted by AWS. Similar to MongoDB and Apache Cassandra. |
| Elasticache | Host and scale an in-memory cache. ElastiCache supports two open-source in-memory caching engines: Memcached and Redis | In-memory caching server hosted by AWS. Similar to Memcached and Redis. |
| Elastic Transcoder | Transcode media files in the Cloud. | Dedicated media transcode servers hosted by AWS. |
| SQS (Simple Queue Service) | Host and scale a messaging service. The purpose of a Queue is to decouple "message producers" from "message consumers" (because the "message consumers" may not be able to respond to messages as fast as "message producers" expect). The message can be any text and can contain up to 256KB of text in any format. An real world example of this service can be a large scale mobile voting App. The SQS would sit between the App and the backend application and could happily absorb up to millions of messages/sec while the backend application tally up the votes (or even perform some simple analytics. e.g. prevent duplicates) as fast as possible. | Message queuing systems hosted by AWS. |
| WAF (Web Application Firewall) | Protect your web applications from common web exploits such as SQL injection, cross-site scripting, and/or rules designed for your specific web application. | Software based application firewall hosted by AWS. |`

webDeveloperServicesString
  .split('\n')
  .map(function (serviceString) {
    const values = serviceString.split('|')
    services.push({
      name: values[1].trim(),
      purpose: values[2].trim(),
      analogy: values[3].trim(),
      category: 'Web Developer Services'
    })
  })

const opsServicesString = `| CodeCommit | Host version controlled code | Hosted Git repository |
| CodeDeploy | Deploy App assets onto a group of EC2 instances using pre-defined AppSpec file executed by CodeDeploy. | Nothing exactly the same; PaaS services such as Heroku is probably closest. |
| CodePipeline | Builds, tests, and deploys your code every time there is a code change, based on the release process models you define. | Services such as CircleCI and Travis |
| EC2 Container Service | Run and scale Docker containers without managing your own EC2 clusters. | Amazon Docker as a Service |
| Elastic Beanstalk | Host Apps without managing servers | AWS's Platform as a Service |`

opsServicesString
  .split('\n')
  .map(function (serviceString) {
    const values = serviceString.split('|')
    services.push({
      name: values[1].trim(),
      purpose: values[2].trim(),
      analogy: values[3].trim(),
      category: 'Ops and Code Deployment Services'
    })
  })

ws.write(JSON.stringify(services, null, 2))
ws.end()

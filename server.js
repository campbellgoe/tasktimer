const express = require('express')
const next = require('next')
const bodyParser = require('body-parser');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const nodemailer = require('nodemailer');
const { join } = require('path');
const { parse } = require('url');
require('dotenv').config();
require('now-env');
let emails = [];
app.prepare()
.then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.get("/service-worker.js", (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    const filePath = join(__dirname, '.next', pathname)
    res.set('Content-Type', 'text/javascript');
    return res.sendFile(filePath);
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.post('/contact', function(req, res) {
    console.log("GMAIL_USER:", process.env.GMAIL_USER);
    const { name, email, message } = req.body;
    if(emails.includes(email)) {
      res.json({ success: false, reason:"A message can only be sent once per 6 seconds."});
    } else {
      let mailOpts, smtpTrans;
      smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS
        }
      });
      mailOpts = {
        from: email,
        to: process.env.GMAIL_USER,
        subject: 'New message from TaskTimer contact form.',
        text: `${name} (${email}) says:\r\n${message}`
      };
      //test email
      smtpTrans.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'TaskTimer contact form message copy.',
        text: `${name} (${email}) says:\r\n${message}`
      }, function (error, response) {
        //now send actual email to my gmail account
        if(!error){
          smtpTrans.sendMail(mailOpts, function (error, response) {
            emails.push(email);
            setTimeout(()=>{
              emails = emails.filter(em=>{
                return em !== email;
              })
            }, 1000*6);
            res.json({
              success: error ? false : true,
              message: error ? `Error: ${error.name} (${error.code})` : "Message sent successfully. Check your email for a copy of the message."
            });
          });
        } else {
          res.json({
            success: false,
            message: "Your email was unreachable:\r\n"+JSON.stringify(error)
          });
        }
      });
    }
  });
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

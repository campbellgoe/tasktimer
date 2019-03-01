const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.post('/contact', function(req, res) {
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
            message: "Your email was unreachable"
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

import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
})

const users = [
  'sacharavya@gmail.com',
  'sacharavya1@gmail.com',
  'sacharavya2@gmail.com',
  'sacharavya3@gmail.com',
]

users.forEach((to, i, msg) => {
  const mailOptions = {
    from: process.env.EMAIL,
    subject: 'Trying Nodemailer in my nodejs app',
    text: `Hey! guys.
              How are you? multimail try gardai chu mail aayo hola discord ma aau kura kani garnu paryo`,
  }
  mailOptions.to = to

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent:' + info.response)
    }
    if (i === maillist.length - 1) {
      msg.transport.close()
    }
  })
})

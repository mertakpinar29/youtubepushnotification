import { google } from 'googleapis'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
dotenv.config()
const app = express()
app.use(cors())
let lastVideoId = ''

app.get('/', (req, res) => {
  res.json(lastVideoId)
})

app.listen(5000, () => {
  console.log('5000. portta dinliyor')
})

setInterval(() => {
  google
    .youtube('v3')
    .activities.list({
      part: 'snippet',
      key: process.env.YOUTUBE_API_KEY,
      channelId: 'UC7lxUNscyoyAbfVy7snosKQ',
    })
    .then((response) => {
      if (lastVideoId === response.data.items[0].id) return
      lastVideoId = response.data.items[0].id
    })
    .catch((err) => console.log(err))
}, 5000)

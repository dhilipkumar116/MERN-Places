import express from 'express';
// to use this syntax we have to "type":"module" in package.json
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'

import postRoute from './routes/posts.js';

const app = express();
dotenv.config()

app.use(bodyParser.json({ limit: '30mb'}));
app.use(
  bodyParser.urlencoded({ limit: '30mb', extended: true })
);
//This parser accepts only UTF-8 encoding of the body and supports
//automatic inflation of gzip and deflate encodings.
// extended - This object will contain key-value pairs, where the value can be
//a string or array (when extended is false), or any type (when extended is true).

app.use(cors());

app.get('/',(req,res)=>{
  res.send('welcome to memories mern project');
})
app.use('/posts',postRoute);

// const CONNECTION_URL = '';
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server running on port :${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

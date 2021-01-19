// entry point for server
import express from 'express'; // ES6 syntax, babel did the transformation
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();

const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise; // making sure we wait for the completion of  DB connection
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// bodyparser setup - to parse requests incoming and make sure it can be read by our API
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => 
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
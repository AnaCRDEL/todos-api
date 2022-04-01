const express = require('express');
const connectDb = require('./config/db.config');
const cors = require('cors');

connectDb();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/auth', require('./routes/auth.routes'));

app.use(require('./middlewares/auth.middleware'));

app.use('/todos', require('./routes/todos.routes.js'));

app.use('/user', require('./routes/user.routes'))

app.listen(process.env.PORT, () => console.log(`Server listen on Port ${process.env.PORT}`))
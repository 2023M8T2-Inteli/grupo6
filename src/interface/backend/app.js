const express = require('express');
const app = express();
const port = 3000;

const chatRouter = require('./routes/chatRouter');
const componentsRouter = require('./routes/componentsRouter');
const logRouter = require('./routes/logRouter');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/chat', chatRouter);
app.use('/components', componentsRouter);
app.use('/log',logRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
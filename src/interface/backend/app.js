const express = require('express');
const app = express();
const port = 3000;

const chatRouter = require('./routes/chatRouter');
const componentsRouter = require('./routes/componentsRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/chat', chatRouter);
app.use('/components', componentsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});

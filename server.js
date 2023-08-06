// dont forget to create an .env file
// make folders in the client/src folder for:
// actions, components, pages, reducers, utils
const cors = require('cors');
const express = require('express');

//define needed files here

const app = express();

app.use(cors());

//connect database

//init middleware
app.use(express.json({ extended: false }));

//define routes


//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set Static Folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

//Define Ports
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
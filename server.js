const app = require("./backend/index.js");
const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  console.log(`Server Started on port ${PORT} - I am the database server :)`)
);

// const start = 'node_modules/@korenezri/jsondb/backend/server.js'
// module.exports = start

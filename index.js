const app = require("./src/server.js");

// Listener Config

const PORT = process.env.PORT || 3001;

// Listener

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});

// On Terminate Signal

process.on("SIGTERM", () => {
  app.close(() => {
    console.log("Process terminated");
  });
});

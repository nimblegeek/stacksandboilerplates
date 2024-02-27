const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable or 3000 if it's not set

// Serve static files from the 'public' directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

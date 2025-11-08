// server.js
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Nexum Cloud</title></head>
      <body style="font-family:sans-serif;text-align:center;margin-top:5rem;">
        <h1>🌐 Nexum Cloud is running!</h1>
        <p>Your Coolify + IONOS server works perfectly 🎉</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});

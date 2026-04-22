import cors from "cors";
import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "dtdomonr api",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/message", (_req, res) => {
  res.json({
    title: "dtdomonr fullstack",
    message: "Your backend is ready to power the website."
  });
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});

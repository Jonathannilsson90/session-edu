import express from "express";
import session from "express-session";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;
app.use(express.json());

app.use(
  session({
    secret: "S3cret",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log("Server is running on " + port);
});

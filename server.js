import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/quote", (req, res) => {
  try {
    // quotes.json dosyasını oku
    const data = JSON.parse(fs.readFileSync("./quotes.json", "utf8"));
    const randomIndex = Math.floor(Math.random() * data.length);
    res.json(data[randomIndex]);
  } catch (error) {
    console.error("Backend hatası:", error);
    res.status(500).json({ error: "Alıntı alınamadı" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

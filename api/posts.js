import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const db = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data/db.json"), "utf8")
  );

  res.status(200).json(db.posts);
}